import {test, expect} from '@playwright/test'

test('launchbrowser',async ({page})=>
{
    await page.goto('https://demo.automationtesting.in/Register.html');
    //await page.getByRole('textbox').nth(0).fill('kunal');
    await page.getByRole('[ng-model=FirstName]').fill('kunal');
    //await page.getByPlaceholder('First Name').fill('kunal');
    await page.waitForTimeout(5000);
}    
)