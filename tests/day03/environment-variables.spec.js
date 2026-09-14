import { test } from "@playwright/test";

test("@env-test testing environment variables", async ({ page }) => {
  console.log(
    "Environment variable TEST_ENV_VAR:",
    process.env.PRACTICE_USERNAME,
  );
  console.log(
    "Environment variable TEST_ENV_VAR:",
    process.env.PRACTICE_PASSWORD,
  );
});


test('Bypass auth using env var', async ({ page }) => {
    const username = process.env.PRACTICE_USERNAME;
    const password = process.env.PRACTICE_PASSWORD;
    const encodedCredentials = Buffer.from(`${username}:${password}`).toString('base64');
  
    await page.setExtraHTTPHeaders({
      'Authorization': `Basic ${encodedCredentials}`,
    });
  
    await page.goto('https://the-internet-5chk.onrender.com/basic_auth');
});