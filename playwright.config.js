import { defineConfig, devices } from "@playwright/test";

import * as dotenv from 'dotenv';
dotenv.config();


export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "tests",

  // Run all tests in parallel.
  fullyParallel: false,

  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 1,

  // Opt out of parallel tests on CI.
  workers: 1,

  // Reporter to use
  reporter: "html",

  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    //baseURL: "http://localhost:3000",
    baseURL: "https://spartan-app-new-nonsecure.onrender.com",

    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
    //    screenshot: "on-first-retry",
    //    video: {mode: "on-first-retry", size: { width: 1280, height: 720 }},

    launchOptions: {
      headless: false,
      slowMo: 2000, // Slow down by 2 seconds to see the actions
    },
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: "Local Chrome",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        channel: "chrome",
      },
    },
  ],
  //   // Run your local dev server before starting the tests.
  //   webServer: {
  //     command: "npm run start",
  //     url: "http://localhost:3000",
  //     reuseExistingServer: !process.env.CI,
  //   },

  // name: "Microsoft Edge",
  // use: {
  //   ...devices["Desktop Edge"],
  //   channel: "msedge",
  //   viewport: { width: 1280, height: 720 },
  // },

  // name: "chromium",
  // use: {
  //   ...devices["Desktop Chrome"],
  //   viewport: { width: 1280, height: 720 },
  // },

  // name: "Google Chrome",
  // use: {
  //   ...devices["Desktop Chrome"],
  //   channel: "chrome",
  //   viewport: { width: 1280, height: 720 },
  // },

  // name: "Mobile Chrome",
  // use: {
  //   ...devices["Galaxy Note 3"],
  // },
});
