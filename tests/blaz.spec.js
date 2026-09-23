import {test, expect} from '@playwright/test';
import {blazdemo} from './pomexmpl/pom.js';
import {chooseflight} from './pomexmpl/flight.js'
import { purchase } from './pomexmpl/purchase.js';

test('blzdemotesting', async({page})=>{

    const bz =new blazdemo(page);
    await page.goto('https://blazedemo.com/');
    await bz.searchflight('Paris','London');
    await expect(page).toHaveTitle('BlazeDemo - reserve');
    await page.waitForTimeout(1000);
})


test('findflight', async({page})=>
{
    const bz =new blazdemo(page);
    const cflight = new chooseflight(page);
    await page.goto('https://blazedemo.com/');
    await bz.searchflight('Paris','London');
    await page.waitForTimeout(1000);
    await cflight.flightchoose();
    await page.waitForTimeout(1000);


})

test('purchase_ticket', async({page})=>
{
    //call pom.js
    const bz =new blazdemo(page);
    const cflight = new chooseflight(page);
    const pur = new purchase(page);

    await page.goto('https://blazedemo.com/');
    await bz.searchflight('Paris','London');
    await page.waitForTimeout(1000);

    //call flight.js
    await cflight.flightchoose();
    await page.waitForTimeout(1000);

    //call purchase.js
    await pur.purchaseticket();
    await page.waitForTimeout(2000);
   await expect(page.locator('#inputName')).toBeVisible();
   await expect(page.locator('#inputName')).toBeEditable();
   await expect(page.locator('#inputName')).toBeEnabled();
 
   await expect(page.locator('#address')).toBeVisible();
   await expect(page.locator('#address')).toBeEditable();
   await expect(page.locator('#address')).toBeEnabled();

    
})