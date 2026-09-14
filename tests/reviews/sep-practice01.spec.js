import { expect, test } from "@playwright/test";
import { CommonUI } from "./CommonUI";
import { Faker } from "@faker-js/faker";

test.describe("Start Application Step Tests", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
  });

  test("Verify that clicking terms and conditions", async ({ page }) => {
    let popupEventPromise = page.waitForEvent("popup");

    let termsAndConditionsLink = page.locator(
      "//a[@href='https://cydeo.com/terms-conditions/']",
    );

    await termsAndConditionsLink.click();

    let newPage = await popupEventPromise;

    let termsAndConditionsHeader = newPage.locator(
      "//h1[normalize-space()='Terms and Conditions']",
    );
    await expect(termsAndConditionsHeader).toBeVisible();
  });

  test("Verif that first steppper is blue", async ({ page }) => {
    let startApplicationCircle = page.locator(
      "(//div[@class='step-circle'])[1]",
    );

    await expect(startApplicationCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    );

    let firstname = faker.person.firstName();
    let lastname = faker.person.lastName();
    let email = faker.internet.email({firstName: firstname, lastName: lastname});
    let phone = faker.string.numeric(10);

    await CommonUI.startApplicationCircle(page, firstname, lastname, email, phone);

    let paymentPlanCircle = page.locator("(//div[@class='step-circle'])[2]");

    await expect(startApplicationCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
    await expect(paymentPlanCircle).toHaveCSS(
      "background-color",
      "rgb(1,201,255)",
    );
  });

   test("Verify that personal input fields are enabled and accept user input", async ({
     page,
   }) => {
     let firstname = faker.person.firstName(); // Muhtar
     let lastname = faker.person.lastName();
     let email = faker.internet.email({
       firstName: firstname,
       lastName: lastname,
     });
     let phoneNumber = faker.string.numeric(10);

     let firstNameInput = page.locator("//input[@formcontrolname='firstName']");
     let lastNameInput = page.locator("//input[@formcontrolname='lastName']");
     let emailInput = page.locator("//input[@formcontrolname='email']");
     let phoneInput = page.locator("//input[@formcontrolname='phoneNumber']");

     await CommonUI.enterPersonalDetails(
       page,
       firstname,
       lastname,
       email,
       phoneNumber,
     );

     await expect(firstNameInput).toHaveValue(firstname);
     await expect(lastNameInput).toHaveValue(lastname);
     await expect(emailInput).toHaveValue(email);
     await expect(phoneInput).toHaveValue(phoneNumber);
   });
});
