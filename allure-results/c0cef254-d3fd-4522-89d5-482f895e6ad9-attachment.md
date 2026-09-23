# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: datadriven.spec.js >> loginwith data
- Location: tests\datadriven.spec.js:4:5

# Error details

```
Error: page.fill: value: expected string, got number
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [active] [ref=e44]: kunal@test.com
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - insertion [ref=e57]:
    - generic [ref=e60]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e62]: Discover more
      - link "Explore Streaming Services" [ref=e63] [cursor=pointer]
      - link "Download Reference Apps" [ref=e68] [cursor=pointer]
      - link "Install Firewall Software" [ref=e73] [cursor=pointer]
  - contentinfo [ref=e78]:
    - generic [ref=e83]:
      - heading "Subscription" [level=2] [ref=e84]
      - generic [ref=e85]:
        - textbox "Your email address" [ref=e86]
        - button "" [ref=e87] [cursor=pointer]
        - paragraph [ref=e89]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e93]: Copyright © 2021 All rights reserved
  - insertion [ref=e95]:
    - generic [ref=e98]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e100]: Discover more
      - link "Compare Developer Tools" [ref=e101] [cursor=pointer]
      - link "Download Tech Manuals" [ref=e106] [cursor=pointer]
      - link "Download Productivity Apps" [ref=e111] [cursor=pointer]
  - text: 
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import xlsx from 'xlsx';
  3  | 
  4  | test('loginwith data', async({page})=>
  5  | {
  6  |     await page.goto('https://www.automationexercise.com/login');
  7  |     const workbook = xlsx.readFile('excel_report/data.xlsx');
  8  |     const sheetName = workbook.SheetNames[0];
  9  |     const sheet=workbook.Sheets[sheetName];
  10 |     const data=xlsx.utils.sheet_to_json(sheet);
  11 | 
  12 |     for(let i=0;i<data.length;i++)
  13 |     {
  14 |         
  15 |         await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[2]',data[i].username)
> 16 |         await page.fill('//*[@id="form"]/div/div/div[1]/div/form/input[3]',data[i].password)
     |                    ^ Error: page.fill: value: expected string, got number
  17 |         await page.getByText('Login').click();
  18 |     }
  19 |     
  20 | });
```