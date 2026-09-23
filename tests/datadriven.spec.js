import {test, expect} from '@playwright/test';
import xlsx from 'xlsx';

test('loginwith data', async({page})=>
{
    await page.goto('https://www.automationexercise.com/login');
    const workbook = xlsx.readFile('excel_report/data.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet=workbook.Sheets[sheetName];
    const data=xlsx.utils.sheet_to_json(sheet);

    for(let i=0;i<data.length;i++)
    {
        
        await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[2]',data[i].username);
        await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[3]',data[i].password.toString());
        await page.getByText('Login').nth(0).click();
        await page.waitForTimeout(2000);
    }
    
});