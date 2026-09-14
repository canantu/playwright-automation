import { test } from "@playwright/test";

test.describe("Groups Intro", () => {
  test.beforeEach("Setup for each test", async ({ page }) => {
    // Common setup steps for each test case
    console.log("before each test case");
  });

  test.afterEach(async () => {
    // Common cleanup steps for each test case
    console.log("after each test case");
  });

  test.beforeAll(async () => {
    // Setup steps that run once before all test cases
    console.log("before all test cases");
  });
  test.afterAll(async () => {
    // Cleanup steps that run once after all test cases
    console.log("after all test cases");
  });

  test("Test Case 1", async ({ page }) => {
    console.log("test case 1");
    // Add your test steps here
  });

  test("Test Case 2", async ({ page }) => {
    console.log("test case 2");
    // Add your test steps here
  });
});




