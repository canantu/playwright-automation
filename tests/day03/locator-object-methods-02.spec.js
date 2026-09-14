import { test } from "@playwright/test";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com");

  });

  test("innerText(): visible text", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");

    let actualText = await headerElement.innerText();
    console.log("actualText: " + actualText);


  });

  test("inputValue(): get value of an input, textarea,select", async ({ page }) => {

    let inputLink = page.getByText("Inputs");
    await inputLink.click();

    let inputElement = page.locator("//input[@type='number']");
    await inputElement.fill("12345"); // give all charachters all at once, not one by one
    let actualValue = await inputElement.inputValue();
    console.log("actualValue: " + actualValue);
  });

  test("getAttribute(): get attribute value", async ({ page }) => {
    let abTestingLink = page.getByText("A/B Testing");
    let actualAttribute = await abTestingLink.getAttribute("href");
    console.log("actualAttribute: " + actualAttribute);
  });
});
