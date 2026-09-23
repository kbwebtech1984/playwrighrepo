# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> blzdemotesting
- Location: tests\blaz.spec.js:6:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "/BlazeDemo/"
Received: "BlazeDemo - reserve"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "BlazeDemo - reserve"

```

```yaml
- link "Travel The World":
  - /url: index.php
- link "home":
  - /url: home
- heading "Flights from Paris to London:" [level=3]
- table:
  - rowgroup:
    - 'row "Choose Flight # Airline Departs: Paris Arrives: London Price"':
      - columnheader "Choose"
      - 'columnheader "Flight #"'
      - columnheader "Airline"
      - 'columnheader "Departs: Paris"'
      - 'columnheader "Arrives: London"'
      - columnheader "Price"
  - rowgroup:
    - row "Choose This Flight 43 Virgin America 1:43 AM 9:45 PM $472.56":
      - cell "Choose This Flight":
        - button "Choose This Flight"
      - cell "43"
      - cell "Virgin America"
      - cell "1:43 AM"
      - cell "9:45 PM"
      - cell "$472.56"
    - row "Choose This Flight 234 United Airlines 7:43 AM 10:45 PM $432.98":
      - cell "Choose This Flight":
        - button "Choose This Flight"
      - cell "234"
      - cell "United Airlines"
      - cell "7:43 AM"
      - cell "10:45 PM"
      - cell "$432.98"
    - row "Choose This Flight 9696 Aer Lingus 5:27 AM 8:22 PM $200.98":
      - cell "Choose This Flight":
        - button "Choose This Flight"
      - cell "9696"
      - cell "Aer Lingus"
      - cell "5:27 AM"
      - cell "8:22 PM"
      - cell "$200.98"
    - row "Choose This Flight 12 Virgin America 11:23 AM 1:45 PM $765.32":
      - cell "Choose This Flight":
        - button "Choose This Flight"
      - cell "12"
      - cell "Virgin America"
      - cell "11:23 AM"
      - cell "1:45 PM"
      - cell "$765.32"
    - row "Choose This Flight 4346 Lufthansa 1:45 AM 8:34 PM $233.98":
      - cell "Choose This Flight":
        - button "Choose This Flight"
      - cell "4346"
      - cell "Lufthansa"
      - cell "1:45 AM"
      - cell "8:34 PM"
      - cell "$233.98"
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
> 11 |     await expect(page).toHaveTitle('/BlazeDemo/');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  12 |     await page.waitForTimeout(3000);
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
  23 |     await page.waitForTimeout(3000);
  24 | 
  25 |     await cflight.flightchoose();
  26 |     await page.waitForTimeout(3000);
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
  37 |     await page.goto('https://blazedemo.com/');
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