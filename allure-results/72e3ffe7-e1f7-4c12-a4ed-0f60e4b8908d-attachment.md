# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> purchase_ticket
- Location: tests\blaz.spec.js:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://blazedemo.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Travel The World" [ref=e5] [cursor=pointer]:
      - /url: index.php
    - link "home" [ref=e6] [cursor=pointer]:
      - /url: home
  - generic [ref=e8]:
    - heading "Welcome to the Simple Travel Agency!" [level=1] [ref=e9]
    - paragraph [ref=e10]: The is a sample site you can test with BlazeMeter!
    - paragraph [ref=e11]:
      - text: Check out our
      - link "destination of the week! The Beach!" [ref=e12] [cursor=pointer]:
        - /url: vacation.html
  - generic [ref=e13]:
    - heading "Choose your departure city:" [level=2] [ref=e14]
    - generic [ref=e15]:
      - combobox [ref=e16] [cursor=pointer]:
        - option "Paris" [selected]
        - option "Philadelphia"
        - option "Boston"
        - option "Portland"
        - option "San Diego"
        - option "Mexico City"
        - option "São Paolo"
      - paragraph
      - heading "Choose your destination city:" [level=2] [ref=e17]
      - combobox [ref=e18] [cursor=pointer]:
        - option "Buenos Aires" [selected]
        - option "Rome"
        - option "London"
        - option "Berlin"
        - option "New York"
        - option "Dublin"
        - option "Cairo"
      - paragraph
      - button "Find Flights" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import {blazdemo} from '../tests/pom.js';
  3  | import {chooseflight} from '../tests/flight.js'
  4  | import { purchase } from './purchase.js';
  5  | 
  6  | test('blzdemotesting', async({page})=>{
  7  | 
  8  |     const bz =new blazdemo(page);
  9  |     await page.goto('https://blazedemo.com/');
  10 |     await bz.searchflight('Paris','London');
  11 |     await expect(page).toHaveTitle('BlazeDemo - reserve');
  12 |     await page.waitForTimeout(2000);
  13 | })
  14 | 
  15 | 
  16 | test('findflight', async({page})=>
  17 | {
  18 |     const bz =new blazdemo(page);
  19 |     const cflight = new chooseflight(page);
  20 | 
  21 |     await page.goto('https://blazedemo.com/');
  22 |     await bz.searchflight('Paris','London');
  23 |     await page.waitForTimeout(2000);
  24 | 
  25 |     await cflight.flightchoose();
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 | 
  29 | })
  30 | 
  31 | test('purchase_ticket', async({page})=>
  32 | {
  33 |     const bz =new blazdemo(page);
  34 |     const cflight = new chooseflight(page);
  35 |     const pur = new purchase(page);
  36 | 
> 37 |     await page.goto('https://blazedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  38 |     await bz.searchflight('Paris','London');
  39 |     await page.waitForTimeout(2000);
  40 | 
  41 |     await cflight.flightchoose();
  42 |     await page.waitForTimeout(1000);
  43 | 
  44 |     await pur.purchaseticket();
  45 |     await page.waitForTimeout(3000);
  46 |    await expect(page.locator('#inputName')).toBeVisible();
  47 | })
```