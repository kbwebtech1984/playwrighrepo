import {test, expect} from '@playwright/test'

test('screenshot',async ({page})=>
{
    await page.goto('https://demo.automationtesting.in/Register.html');
   await page.screenshot({path:'./screenshot/2.png',fullPage:true});
    await page.waitForTimeout(5000);
});
