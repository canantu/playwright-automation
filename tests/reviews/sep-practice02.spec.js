// generate test group
import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(page);
  });

  test("Verify that Step 2 stepper circle is green and payment plane circle is blue", ({
    page,
  }) => {
    let startApplicationCircle = page.locator(
      "(//div[@class='step-circle'])[1]",
    );

    let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");

    expect(startApplicationCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );

    expect(paymentPlanCircle).toHaveCSS("background-color", "rgb(1, 201, 255)");
  });

  
});
