import {test, expect} from '@playwright/test'

test('demo',async ({page})=>
{
    await page.goto('https://demo.automationtesting.in/Register.html');
    const firstName = page.getByPlaceholder('First Name');

await expect(firstName).toHaveJSProperty('validationMessage','Please fill in this field.');
    //const title = "Automation Exercise - Signup / Login";
    //await expect(page).toHaveTitle(title);
    //await page.getByAltText('Website for automation practice').click();
   // page.goBack();
    //page.goForward();
    //await expect(page.locator('#name')).toBeVisible();
    //await expect(page.locator('#name')).toBeEnabled();
    //await expect(page.locator('#name')).toBeEditable();
    //await page.locator('#name').fill('kunal');
    //await expect(page.locator('//*[@id="header-inner"]/div[2]/p/span')).toHaveText('For Selenium, Cypress & Playwright');
    //wait expect(page.getByText('For Selenium, Cypress & Playwright')).toHaveText('For Selenium, Cypress & Playwright');
    //await page.pause(2000);
    
}    
)