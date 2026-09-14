import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("File download", async ({ page }) => {
  // create a promise to wait for the download event
  const downloadPromise = page.waitForEvent("download");

  await page.goto("https://practice.cydeo.com/download");
  await page.click("text='Insurance.jpg'"); // triggers the download event

  let download = await downloadPromise; // await for the download event to complete
  const downloadPath = path.join(
    __dirname,
    "./downloads",
    download.suggestedFilename(),
  ); // get the suggested filename for the downloaded file
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy(); // check if the file exists in the downloads folder
});

test("File upload", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/upload");

  let uploadPath = path.join(__dirname, "./uploads", "TestUpload.txt"); // adjust the path to your test file

  await page.setInputFiles("//input[@id='file-upload']", uploadPath); // click the button to upload the file
  await page.click("//input[@id='file-submit']"); // click the submit button

  await expect(page.getByText("File Uploaded!")).toBeVisible(); // check if the file was uploaded successfully
});
