import { test, expect } from "@playwright/test";
let linkElements;
test.describe("Test Group", () => {
  test.beforeEach("Setup for each test", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com");
    linkElements = await page.locator("//ul[@class='list-group']/li/a").all();
  });

  test("Verify that there are exactly 50 link elements within the ul tag", async ({
    page,
  }) => {
    expect(linkElements.length).toBe(50);
  });

  test("Verify that each of the 50 link elements is visible", async ({
    page,
  }) => {
    for (let e of linkElements) {
      await expect(e).toBeVisible();
      expect(await e.isVisible()).toBeTruthy();

      await expect(e).toBeEnabled();
      expect(await e.isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each link element has a href attribute", async ({
    page,
  }) => {
    for (let e of linkElements) {
      await expect(e).toHaveAttribute("href");
    }
  });
});
