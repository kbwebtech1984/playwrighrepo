# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> findflight
- Location: tests\blaz.spec.js:13:5

# Error details

```
ReferenceError: bz is not defined
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
  4  | 
  5  | test('blzdemotesting', async({page})=>{
  6  | 
  7  |     const bz =new blazdemo(page);
  8  |     await page.goto('https://blazedemo.com/');
  9  |     await bz.searchflight('Paris','London');
  10 |     await page.waitForTimeout(3000);
  11 | })
  12 | 
  13 | test('findflight', async({page})=>
  14 | {
  15 |     await page.goto('https://blazedemo.com/');
> 16 |     await bz.searchflight('Paris','London');
     |     ^ ReferenceError: bz is not defined
  17 |     await page.waitForTimeout(3000);
  18 |     const cflight = new chooseflight(page);
  19 |     await cflight.flightchoose();
  20 | 
  21 | })
  22 | 
```