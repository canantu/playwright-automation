import { test } from '@playwright/test';

test.describe('JS alerts', () => {

    test.beforeEach(async ({ page }) => {
        page.goto('https://the-internet-5chk.onrender.com/javascript_alerts');
        
    });

  test('regular alert', async ({ page }) => {
    page.on("dialog", async (dialog) => {
        console.log(`Alert Message: ${dialog.message()}`);
        dialog.accept();
    });

    let jsAlertLink = page.locator("//button[@onclick='jsAlert()']");
    await jsAlertLink.click();


  });

  test('confirm alert', async ({ page }) => {
    page.on("dialog", async (dialog) => {
        console.log(`Confirm Message: ${dialog.message()}`);
        dialog.dismiss();
    });

    let jsConfirmLink = page.locator("//button[contains(text(), 'JS Confirm')]");
    await jsConfirmLink.click();
  });

  test('prompt alert', async ({ page }) => {  


    let clickForJsPromptLink = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJsPromptLink.click();

    page.on("dialog", async (dialog) => {
        console.log(`Prompt Message: ${dialog.message()}`);
        await dialog.accept("Hello from Playwright");
    });
  });
});