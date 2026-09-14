import { test } from "@playwright/test";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com");
  });

  test("left click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test("right click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });
  });

  test("hover", async ({ page }) => {
    await page.click("text='Hovers'");
    //await page.hover("//img[@alt='User Avatar']");
    let allAvatars = await page.locator("//img[@alt='User Avatar']").all();

    for (let avatar of allAvatars) {
      await avatar.hover();
    }
  });

  test("mouse wheel scrolling", async ({ page }) => {
    await page.mouse.wheel(0,200);
  });



  test("scrolling specific element", async ({ page }) => {
    let inputsLink = await page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();

    await inputsLink.click();
  });
  test("drag and drop", async ({ page }) => {

    await page.click("text='Drag and Drop'");

    //await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");

    let source = await page.locator("//div[@id='column-a']");
    let target = await page.locator("//div[@id='column-b']");
    await source.dragTo(target);
  });
});
