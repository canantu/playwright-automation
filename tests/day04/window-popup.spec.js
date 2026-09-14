import { test, expect } from "@playwright/test";

test("window popup", async ({ page }) => {
  // create a promise to wait for the new page event
  let promiseNewPageEvent = page.waitForEvent("popup");
  await page.goto("https://practice.cydeo.com/windows");

  await page.click("text='Click Here'"); // triggers the new page event
  let newPage = await promiseNewPageEvent; // await for the new page event to complete

  expect(newPage).toHaveTitle("New Window");
  expect(page).toHaveTitle("Windows"); //autoswitching back to the original page after new page event is completed

  await page.bringToFront(); // bring the original page to the front
  let firstWindowElement = page.getByText("Opening a new window");
  await expect(firstWindowElement).toBeVisible();

  await newPage.bringToFront(); // bring the new page to the front
  let newWindowElement = newPage.getByText("New Window");
  await expect(newWindowElement).toBeVisible();
});
