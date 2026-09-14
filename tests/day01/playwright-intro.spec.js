//const {test} = require('@playwright/test');

import {test} from "@playwright/test";

test("simple google test", async({page}) => {
    // test code

    await page.goto("https://www.google.com");
    await page.waitForTimeout(3000);
});







