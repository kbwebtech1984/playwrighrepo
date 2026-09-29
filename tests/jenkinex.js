import {test, expect} from '@playwright/test'

test('demo',async ({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const title = 'Automation Testing Practice';
    await expect(page).toHaveTitle(title);
    await expect(page.getByText('Data Entry Form'));
    //name
    await expect(page.locator('#name')).toBeVisible();
    await expect(page.locator('#name')).toBeEditable();
    await expect(page.locator('#name')).toBeEnabled();
    page.locator("#name").fill('kunal');
    await expect(page.locator('#name')).toHaveValue('kunal');
    //email
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#email')).toBeEditable();
    await expect(page.locator('#email')).toBeEnabled();
    page.locator("#email").fill('kunal@test.com');
    await expect(page.locator('#email')).toHaveValue('kunal@test.com');
    //phone
    await expect(page.locator('#phone')).toBeVisible();
    await expect(page.locator('#phone')).toBeEditable();
    await expect(page.locator('#phone')).toBeEnabled();
    page.locator("#phone").fill('12345678');
    await expect(page.locator('#phone')).toHaveValue('12345678');
    //address
    await expect(page.locator('#textarea')).toBeVisible();
    await expect(page.locator('#textarea')).toBeEditable();
    await expect(page.locator('#textarea')).toBeEnabled();
    page.locator("#textarea").fill('address');
    await expect(page.locator('#textarea')).toHaveValue('address');
    //gender
    await page.getByRole('radio',{name:'Male',exact:true}).check();
    await expect(page.getByRole('radio',{name:'Male',exact:true})).toBeChecked();
    await page.waitForTimeout(3000);
});