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
  - waiting for locator('tr').filter({ hasText: '43' }).locator('input[type="submit"]')

```

# Test source

```ts
  1  | exports.chooseflight = class chooseflight
  2  | {
  3  | constructor(page)
  4  | {
  5  |     this.page=page;
  6  |     //this.page=page.getBytext('Virgin America');
  7  |     //this.flightrows = page.locator('tr', { hasText: 43}).locator('input[type="submit"]');
  8  |     this.flight = page
  9  |             .locator('tr')
  10 |             .filter({ hasText: '43' })
  11 |             .locator('input[type="submit"]');
  12 | }    
  13 |     async choose_flight()
  14 |     {
> 15 |         await this.flight.click();
     |                           ^ Error: locator.click: Target page, context or browser has been closed
  16 |                
  17 |     }
  18 |    
  19 | };
```