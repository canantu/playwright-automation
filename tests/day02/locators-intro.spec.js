import { test } from "@playwright/test";

test("Google test", async ({ page }) => {
  await page.goto("https://www.google.com");

  let searchBox = page.locator("//textarea[@class='gLFyf']");
  //let searchBox = page.$$("//textarea[@class='gLFyf']");

  await searchBox.fill("CYDEO");

  await searchBox.press("Enter");

  await page.waitForTimeout(3000);

});




// locator method has auto wait feature. It will wait until the element is available in the DOM.
