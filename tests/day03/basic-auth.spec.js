import { test } from "@playwright/test";

test("Bypass auth by embedding credentials in the url", async ({ page }) => {
  await page.goto(
    "https://admin:admin@the-internet-5chk.onrender.com/basic_auth",
  );
});

test("Bypass auth by encoding credentials", async ({ page }) => {
  
  let encodedCredentails = Buffer.from("admin:admin").toString("base64");
  
  await page.setExtraHTTPHeaders({"Authorization": `Basic ${encodedCredentails}`} );
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");

});
      