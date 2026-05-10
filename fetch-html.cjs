const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newLine();
  await page.goto('https://admarkdigitalmedia.com/');
  
  // Try to find "Our Work" section and get its HTML
  const content = await page.content();
  fs.writeFileSync('admark-home.html', content);
  
  await browser.close();
})();
