// Retakes the screenshots in docs/images from the current page, so they show the current version and options.
// Run with: node screenshots.js (from the tests folder). The release workflow runs it after setting the version.
// Uses the same offline setup as smoke.js: no network, example links only.

const { chromium } = require('playwright');
const path = require('path');

const PAGE = 'file://' + path.resolve(__dirname, '..', 'index.html');
const OUT = path.resolve(__dirname, '..', 'docs', 'images') + path.sep;

const exampleLinks = [
  { title: 'Work', url: 'https://work.example/', description: 'Tickets and mail' },
  { title: 'Reading', url: 'https://reading.example/', description: '' },
  { title: 'Projects', url: 'https://projects.example/board', description: 'Current sprint' },
];

(async () => {
  const executablePath = process.env.CHROMIUM_PATH || undefined;
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1500 } });
  await page.route('https://**', (r) => r.abort());
  await page.goto(PAGE);
  await page.evaluate((links) => {
    localStorage.clear();
    localStorage.setItem('lang', 'en');
    localStorage.setItem('links', JSON.stringify(links));
    localStorage.setItem('zones', JSON.stringify(zoneNames.slice(0, 2)));
    localStorage.setItem('askAiList', JSON.stringify(aiCatalog.slice(0, 3).map((s) => ({ title: s.title || s.url, url: s.url }))));
  }, exampleLinks);
  await page.reload();
  await page.waitForTimeout(400);

  // The search bar as the quick start shows it: the search form with 8 px around it, saved in assets/.
  const bar = await page.locator('#searchform').boundingBox();
  await page.screenshot({
    path: path.resolve(__dirname, '..', 'assets', 'quickstart-search.png'),
    clip: { x: bar.x - 8, y: bar.y - 8, width: bar.width + 16, height: bar.height + 16 },
  });

  const panel = (id) => page.locator(`#${id} .settings-panel`);

  await page.click('#settings-button');
  await page.waitForTimeout(200);
  await page.locator('#settings:not([hidden]) .settings-panel').screenshot({ path: OUT + 'settings-basic.png' });

  await page.click('#advanced-toggle');
  await page.waitForTimeout(200);
  await page.locator('#settings:not([hidden]) .settings-panel').screenshot({ path: OUT + 'settings-advanced.png' });

  await page.click('#settings-close');
  await page.waitForTimeout(150);
  await page.click('#settings-button');
  await page.waitForTimeout(150);
  await page.click('#manage-open');
  await page.waitForTimeout(250);
  await panel('manage').screenshot({ path: OUT + 'manage-data.png' });

  await page.click('#tab-backup');
  await page.waitForTimeout(150);
  await panel('manage').screenshot({ path: OUT + 'manage-backup.png' });

  await browser.close();
  console.log('Screenshots written to ' + OUT);
})().catch((e) => { console.error('ERROR', e.message); process.exit(1); });
