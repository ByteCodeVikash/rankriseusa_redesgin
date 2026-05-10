import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
app.use(cors({
  origin: ['https://rankriseusa.com', 'https://www.rankriseusa.com', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
}));
app.use(express.json());

const PAYPAL_API = 'https://api-m.paypal.com'; // Live PayPal API
// For sandbox/testing use: 'https://api-m.sandbox.paypal.com'

const { PAYPAL_CLIENT_ID, PAYPAL_SECRET, PORT = 3001 } = process.env;

if (!PAYPAL_CLIENT_ID || !PAYPAL_SECRET) {
  console.error('ERROR: PAYPAL_CLIENT_ID and PAYPAL_SECRET must be set in server/.env');
  process.exit(1);
}

async function getAccessToken() {
  const credentials = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString('base64');
  const response = await fetch(`${PAYPAL_API}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${credentials}`,
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error(`PayPal auth failed: ${response.status}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Create a PayPal order
app.post('/api/orders', async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      return res.status(400).json({ error: 'Invalid amount provided.' });
    }

    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            description: 'RankRise USA - Digital Marketing Services',
            amount: {
              currency_code: 'USD',
              value: parseFloat(amount).toFixed(2),
            },
          },
        ],
      }),
    });

    const order = await response.json();

    if (!response.ok) {
      console.error('PayPal order creation error:', order);
      return res.status(response.status).json({ error: 'Failed to create PayPal order.' });
    }

    res.json(order);
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Capture a PayPal order (after user approves)
app.post('/api/orders/:orderID/capture', async (req, res) => {
  try {
    const { orderID } = req.params;
    const accessToken = await getAccessToken();

    const response = await fetch(`${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const order = await response.json();

    if (!response.ok) {
      console.error('PayPal capture error:', order);
      return res.status(response.status).json({ error: 'Failed to capture PayPal payment.' });
    }

    res.json(order);
  } catch (error) {
    console.error('Capture order error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`PayPal server running on http://localhost:${PORT}`);
});
