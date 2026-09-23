# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> findflight
- Location: tests\blaz.spec.js:14:9

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import {blazdemo} from '../tests/pom.js';
  3  | import {chooseflight} from '../tests/flight.js'
  4  | 
  5  | test('blzdemotesting', async({page})=>{
  6  | 
  7  |     const bz =new blazdemo(page);
  8  |     await page.goto('https://blazedemo.com/');
  9  |     await bz.searchflight('Paris','London');
  10 |     await page.waitForTimeout(3000);
  11 | })
  12 | 
  13 | 
  14 |     test('findflight', async({page})=>
  15 | {
  16 |     const bz =new blazdemo(page);
  17 |     const cflight = new chooseflight(page);
  18 | 
  19 |     await page.goto('https://blazedemo.com/');
  20 |     await bz.searchflight('Paris','London');
  21 |     await page.waitForTimeout(3000);
  22 | 
  23 |     await cflight.flightchoose();
> 24 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  25 | 
  26 | })
```