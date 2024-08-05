const puppeteer = require('puppeteer');

jest.setTimeout(30000);

describe('Page start', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: false,
        });

        page = await browser.newPage();
    });

    test('Popover should be hidden', async () => {
        await page.goto('http://localhost:9000');

        const btn = await page.$('.btn');

        await btn.click();

        await page.waitForSelector('.tooltip-message');

        await btn.click();

        await page.waitForSelector('.tooltip-message') === null;
    });

    afterEach(async () => {
        await browser.close();
    })
});