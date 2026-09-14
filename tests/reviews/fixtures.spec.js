import {test, expect } from '@playwright/test';

test('Context fixture example', async ({context}) => {

    test.setTimeout(60000);

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();
    const page4 = await context.newPage();

    await page4.waitForTimeout(4000);
    
    await page1.bringToFront();
    page1.goto('https://youtube.com');
    await page1.waitForTimeout(4000);
    
    await page2.bringToFront();
    page2.goto('https://linkedin.com');
    await page2.waitForTimeout(4000);
    
    page3.goto('https://facebook.com');
    await page3.waitForTimeout(4000);
    
    page4.goto('https://instagram.com');
    await page4.waitForTimeout(4000);



});


test('Browser fixture example', async ({browser}) => {
    
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context1.newPage();
    const page3 = await context2.newPage();
    const page4 = await context2.newPage();

    page1.goto("https://youtube.com");
    page2.goto("https://facebook.com");
    page3.goto("https://instagram.com");
    page4.goto("https://linkedin.com");






});