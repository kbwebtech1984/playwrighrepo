# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> demo
- Location: tests\demo.spec.js:3:5

# Error details

```
Error: expect(locator).toHaveJSProperty(expected) failed

Locator:  getByPlaceholder('First Name')
Expected: "Please fill out this field."
Received: "Please fill in this field."
Timeout:  5000ms

Call log:
  - Expect "toHaveJSProperty" with timeout 5000ms
  - waiting for getByPlaceholder('First Name')
    14 × locator resolved to <input type="text" required="" ng-model="FirstName" placeholder="First Name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required"/>
       - unexpected value "Please fill in this field."

```

```yaml
- textbox "First Name"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('demo',async ({page})=>
  4  | {
  5  |     await page.goto('https://demo.automationtesting.in/Register.html');
  6  |     const firstName = page.getByPlaceholder('First Name');
  7  | 
> 8  | await expect(firstName).toHaveJSProperty('validationMessage','Please fill out this field.');
     |                         ^ Error: expect(locator).toHaveJSProperty(expected) failed
  9  |     //const title = "Automation Exercise - Signup / Login";
  10 |     //await expect(page).toHaveTitle(title);
  11 |     //await page.getByAltText('Website for automation practice').click();
  12 |    // page.goBack();
  13 |     //page.goForward();
  14 |     //await expect(page.locator('#name')).toBeVisible();
  15 |     //await expect(page.locator('#name')).toBeEnabled();
  16 |     //await expect(page.locator('#name')).toBeEditable();
  17 |     //await page.locator('#name').fill('kunal');
  18 |     //await expect(page.locator('//*[@id="header-inner"]/div[2]/p/span')).toHaveText('For Selenium, Cypress & Playwright');
  19 |     //wait expect(page.getByText('For Selenium, Cypress & Playwright')).toHaveText('For Selenium, Cypress & Playwright');
  20 |     //await page.pause(2000);
  21 | }    
  22 | )
```