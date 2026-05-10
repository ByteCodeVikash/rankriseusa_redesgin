import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ── Google Sheets Submission Utility ──────────────────────────────────────────
export async function submitToSheet(
  formType: string,
  data: Record<string, string>
): Promise<void> {
  const url = import.meta.env.VITE_GOOGLE_SHEET_URL;
  if (!url || url === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') return;
  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }),
        ...data,
      }),
    });
  } catch (err) {
    console.error('[Sheet]', err);
  }
}