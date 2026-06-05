import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'brochures', 'induction-brochure.html');
const outputPath = path.join(root, 'brochures', 'smileyfacealigner-induction-brochure.png');

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1240, height: 1754 },
  deviceScaleFactor: 2,
});

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const brochure = page.locator('.brochure');
await brochure.screenshot({
  path: outputPath,
  type: 'png',
});

await browser.close();
console.log(`Brochure saved to: ${outputPath}`);
