import { test } from "@playwright/test";

test("Google Test", async ({ page }) => {
  // navigate to google.com
  await page.goto("https://www.google.com");

  // wait for 3 seconds
  await page.waitForTimeout(3000);
});
