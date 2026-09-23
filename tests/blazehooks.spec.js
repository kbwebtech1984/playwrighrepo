
import { test, expect } from '@playwright/test';
import { blazdemo } from './pomexmpl/pom.js';
import { chooseflight } from './pomexmpl/flight.js';
import { purchase } from './pomexmpl/purchase.js';

let bz;
let cflight;
let pur;
//blaze using hooks
test.beforeEach(async ({ page }) => {

    // Create POM objects
    bz = new blazdemo(page);
    cflight = new chooseflight(page);
    pur = new purchase(page);

    // Open application
    await page.goto('https://blazedemo.com/');

});

test.afterEach(async ({ page }) => {

    // Optional: close page after every test
    // Playwright normally handles this automatically,
    // so this hook is not required.
    console.log('Test completed:', test.info().title);

});


test('blzdemotesting', async ({ page }) => {

    await bz.searchflight('Paris', 'London');

    await expect(page).toHaveTitle('BlazeDemo - reserve');

});


test('findflight', async ({ page }) => {

    await bz.searchflight('Paris', 'London');

    await cflight.flightchoose();

});


test('purchase_ticket', async ({ page }) => {

    await bz.searchflight('Paris', 'London');

    await cflight.flightchoose();

    await pur.purchaseticket();

    await expect(page.locator('#inputName')).toBeVisible();
    await expect(page.locator('#inputName')).toBeEditable();
    await expect(page.locator('#inputName')).toBeEnabled();

    await expect(page.locator('#address')).toBeVisible();
    await expect(page.locator('#address')).toBeEditable();
    await expect(page.locator('#address')).toBeEnabled();

});

