import { test } from '@playwright/test';

test.describe('', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com/iframe");
    });

  test('Type inside IFrame', async ({ page }) => {

    let iframe = page.frameLocator("//iframe[@id='mce_0_ifr']")
    let textArea = iframe.locator("//body[@id='tinymce']");
    //await textArea.clear();

    await textArea.press("Control+A");
    await textArea.press("Backspace");

    await textArea.fill("Hello World");

    await page.waitForTimeout(3000);

    await expect(textArea).toHaveText("Hello World");

  });

  test('tescase 2', async ({ page }) => {
  });

  test('testcase 3', async ({ page }) => {
  });
});