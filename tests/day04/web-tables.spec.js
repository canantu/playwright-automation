import { test, expect } from "@playwright/test";

test("web tables practice", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = await page.locator("//table[@id='ctl00_MainContent_prderGrid']");
  let rows = await table.locator("//tr").all();
  let columns = await table.locator("//th").all();
  let cells = await table.locator("//td").all();

  expect(rows.length).toBe(9);
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104);

  for (let cell of cells) {
    console.log(await cell.textContent());
  }
});

test("web tables practice 2", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");

  let table = await page.locator("//table[@id='ctl00_MainContent_prderGrid']");
  let rows = await table.locator("//tr").all();

  //create a loop that can print each cell's data of each row excluding first and last cell
  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let i = 1; i < cells.length - 1; i++) {
      console.log(await cells[i].textContent());
    }
    console.log("=====================================");
  }
});

test("web tables practice checkboxes", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/web-tables");
  let table = await page.locator("//table[@id='ctl00_MainContent_prderGrid']");
  let checkboxes = await table.locator("//input[@type='checkbox']").all();
  for (let checkbox of checkboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
});
