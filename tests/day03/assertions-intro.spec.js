import { test, expect } from "@playwright/test";

test.describe("Assertions Intro", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com");

    expect(page).toHaveURL("https://the-internet-5chk.onrender.com");
    expect(page).toHaveTitle("Practice");

    expect(await page.title()).toBe("Practice");
  });

  test("toBeChecked", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();

    await expect(checkbox1).toBeChecked();
    // second way to assert if the checkbox is checked or not
    let isChecked = await checkbox1.isChecked();
    expect(isChecked).toBe(true);
    expect(isChecked).toBeTruthy();
  });

  test("toBeUnchecked", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox2 = page.locator("//input[@id='box2']");
    await checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();

    expect(await checkbox2.isChecked()).toBe(false);
    expect(await checkbox2.isChecked()).toBeFalsy();
  });

  test("verify text of element", async ({ page }) => {
    let headerText = page.locator("//h1/span[@class='h1y']");
    expect(await headerText.innerText()).toBe("Test Automation Practice");
    await expect(headerText).toHaveText("Test Automation Practice");

  });
});
