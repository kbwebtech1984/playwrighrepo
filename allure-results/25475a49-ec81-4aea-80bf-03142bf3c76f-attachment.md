# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: blaz.spec.js >> findflight
- Location: tests\blaz.spec.js:13:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' }) resolved to 3 elements:
    1) <input type="submit" class="btn btn-small" value="Choose This Flight"/> aka getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button')
    2) <input type="submit" class="btn btn-small" value="Choose This Flight"/> aka getByRole('row', { name: 'Choose This Flight 234 United' }).getByRole('button')
    3) <input type="submit" class="btn btn-small" value="Choose This Flight"/> aka getByRole('row', { name: 'Choose This Flight 4346' }).getByRole('button')

Call log:
  - waiting for locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' })
    - waiting for "https://blazedemo.com/reserve.php" navigation to finish...
    - navigated to "https://blazedemo.com/reserve.php"

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e4]:
    - link "Travel The World" [ref=f1e5] [cursor=pointer]:
      - /url: index.php
    - link "home" [ref=f1e6] [cursor=pointer]:
      - /url: home
  - generic [ref=f1e7]:
    - heading "Flights from Paris to Buenos Aires:" [level=3] [ref=f1e8]
    - table [ref=f1e9]:
      - rowgroup [ref=f1e10]:
        - row [ref=f1e11]:
          - columnheader "Choose" [ref=f1e12]
          - 'columnheader "Flight #" [ref=f1e13]'
          - columnheader "Airline" [ref=f1e14]
          - 'columnheader "Departs: Paris" [ref=f1e15]'
          - 'columnheader "Arrives: Buenos Aires" [ref=f1e16]'
          - columnheader "Price" [ref=f1e17]
      - rowgroup [ref=f1e18]:
        - row [ref=f1e19]:
          - cell [ref=f1e20]:
            - button "Choose This Flight" [ref=f1e21] [cursor=pointer]
          - cell "43" [ref=f1e22]
          - cell "Virgin America" [ref=f1e23]
          - cell "1:43 AM" [ref=f1e24]
          - cell "9:45 PM" [ref=f1e25]
          - cell "$472.56" [ref=f1e26]
        - row [ref=f1e27]:
          - cell [ref=f1e28]:
            - button "Choose This Flight" [ref=f1e29] [cursor=pointer]
          - cell "234" [ref=f1e30]
          - cell "United Airlines" [ref=f1e31]
          - cell "7:43 AM" [ref=f1e32]
          - cell "10:45 PM" [ref=f1e33]
          - cell "$432.98" [ref=f1e34]
        - row [ref=f1e35]:
          - cell [ref=f1e36]:
            - button "Choose This Flight" [ref=f1e37] [cursor=pointer]
          - cell "9696" [ref=f1e38]
          - cell "Aer Lingus" [ref=f1e39]
          - cell "5:27 AM" [ref=f1e40]
          - cell "8:22 PM" [ref=f1e41]
          - cell "$200.98" [ref=f1e42]
        - row [ref=f1e43]:
          - cell [ref=f1e44]:
            - button "Choose This Flight" [ref=f1e45] [cursor=pointer]
          - cell "12" [ref=f1e46]
          - cell "Virgin America" [ref=f1e47]
          - cell "11:23 AM" [ref=f1e48]
          - cell "1:45 PM" [ref=f1e49]
          - cell "$765.32" [ref=f1e50]
        - row [ref=f1e51]:
          - cell [ref=f1e52]:
            - button "Choose This Flight" [ref=f1e53] [cursor=pointer]
          - cell "4346" [ref=f1e54]
          - cell "Lufthansa" [ref=f1e55]
          - cell "1:45 AM" [ref=f1e56]
          - cell "8:34 PM" [ref=f1e57]
          - cell "$233.98" [ref=f1e58]
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
  8  |     this.flight = page.locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' });
  9  | }    
  10 |     async choose_flight()
  11 |     {
> 12 |         await this.flight.click();
     |                           ^ Error: locator.click: Error: strict mode violation: locator('tr').filter({ hasText: '43' }).getByRole('button', { name: 'Choose This Flight' }) resolved to 3 elements:
  13 |                
  14 |     }
  15 |    
  16 | };
```