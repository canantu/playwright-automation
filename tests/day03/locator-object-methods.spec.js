import { test } from "@playwright/test";

test.describe("", () => {
  test.beforeEach("Setup for each test", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com");
  });

  test("Check radio buttons/checkboxes if they are unchecked", async ({
    page,
  }) => {
    //let checkboxesLink = page.locator("text='Checkboxes'");
    let checkboxesLink = page.getByText("Checkboxes");

    await checkboxesLink.click();

    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();
  });

  test("Uncheck radio buttons/checkboxes if they are checked", async ({
    page,
  }) => {
    let checkboxesLink = page.getByText("Checkboxes");

    await checkboxesLink.click();

    let checkbox2 = page.locator("//input[@id='box2']");
    await checkbox2.uncheck();
  });

  test("SelectOption for dropdowns", async ({ page }) => {
    let dropdownLink = page.getByText("Dropdown");

    await dropdownLink.click();

    let dropdown = page.locator("//select[@id='dropdown']");
    //await dropdown.selectOption("Option 2");
    //await dropdown.selectOption("1");
    await dropdown.selectOption({ index: 1 });
  });
});
