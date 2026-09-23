# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> findflight
- Location: tests\blaz.spec.js:13:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' })

```

# Test source

```ts
  1  | const { waitForDebugger } = require("node:inspector");
  2  | 
  3  | exports.chooseflight = class chooseflight
  4  | {
  5  | constructor (page)
  6  | {
  7  |     this.page=page;
  8  |     //this.page=page.getBytext('Virgin America');
  9  |     //this.flightrows = page.locator('tr', { hasText: 43}).locator('input[type="submit"]');
  10 |     this.flight = page.locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' });
  11 | }    
  12 |     async choose_flight()
  13 |     {
> 14 |         await this.flight.click();
     |                           ^ Error: locator.click: Target page, context or browser has been closed
  15 |          //console.log('break');
  16 |     }
  17 | 
  18 | }
```