# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.js >> demo
- Location: tests\demo.spec.js:3:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.automationexercise.com/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('demo',async ({page})=>
  4  | {
> 5  |     await page.goto('https://www.automationexercise.com/login');
     |                ^ Error: page.goto: Target page, context or browser has been closed
  6  |     await page.pause(2000);
  7  |     await expect(page).toHaveTitle("test");
  8  |     
  9  | }    
  10 | )
```