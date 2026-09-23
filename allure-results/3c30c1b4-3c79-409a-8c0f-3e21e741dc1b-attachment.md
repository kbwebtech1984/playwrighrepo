# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo2.spec.js >> demo
- Location: tests\demo2.spec.js:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('radio', { name: 'gender' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('radio', { name: 'gender' })

```

```yaml
- banner:
  - heading "Automation Testing Practice" [level=1]
  - paragraph: For Selenium, Cypress & Playwright
- list:
  - listitem:
    - link "Home":
      - /url: http://testautomationpractice.blogspot.com/
  - listitem:
    - link "Udemy Courses":
      - /url: https://www.pavanonlinetrainings.com/#udemy
  - listitem:
    - link "Online Trainings":
      - /url: https://www.pavanonlinetrainings.com/
  - listitem:
    - link "Blog":
      - /url: https://www.pavantestingtools.com/
  - listitem:
    - link "PlaywrightPractice":
      - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
- heading "Data Entry Form" [level=3]:
  - link "Data Entry Form":
    - /url: https://testautomationpractice.blogspot.com/2018/09/automation-form.html
- text: "Name:"
- textbox "Enter Name": kunal
- text: "Email:"
- textbox "Enter EMail": kunal@test.com
- text: "Phone:"
- textbox "Enter Phone": "12345678"
- text: "Address:"
- textbox "Address:": address
- text: "Gender:"
- radio "Male"
- text: Male
- radio "Female"
- text: "Female Days:"
- checkbox "Sunday"
- text: Sunday
- checkbox "Monday"
- text: Monday
- checkbox "Tuesday"
- text: Tuesday
- checkbox "Wednesday"
- text: Wednesday
- checkbox "Thursday"
- text: Thursday
- checkbox "Friday"
- text: Friday
- checkbox "Saturday"
- text: "Saturday Country:"
- combobox "Country:":
  - option "United States" [selected]
  - option "Canada"
  - option "United Kingdom"
  - option "Germany"
  - option "France"
  - option "Australia"
  - option "Japan"
  - option "China"
  - option "Brazil"
  - option "India"
- text: "Colors:"
- listbox "Colors:":
  - option "Red"
  - option "Blue"
  - option "Green"
  - option "Yellow"
  - option "Red"
  - option "White"
  - option "Green"
- text: "Sorted List:"
- listbox "Sorted List:":
  - option "Cat"
  - option "Cheetah"
  - option "Deer"
  - option "Dog"
  - option "Elephant"
  - option "Fox"
  - option "Giraffe"
  - option "Lion"
  - option "Rabbit"
  - option "Zebra"
- paragraph:
  - text: "Date Picker 1 (mm/dd/yyyy):"
  - textbox
- paragraph:
  - text: "Date Picker 2 (dd/mm/yyyy) :"
  - textbox
- text: "Date Picker 3: (Select a Date Range)"
- textbox:
  - /placeholder: Start Date
- text: to
- textbox:
  - /placeholder: End Date
- button "Submit"
- link "Home":
  - /url: https://testautomationpractice.blogspot.com/
- text: "Subscribe to:"
- link "Posts (Atom)":
  - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
- heading "Upload Files" [level=2]
- button "Choose File"
- button "Upload Single File"
- paragraph
- button "Choose File"
- button "Upload Multiple Files"
- paragraph
- heading "Static Web Table" [level=2]
- table:
  - rowgroup:
    - row "BookName Author Subject Price":
      - columnheader "BookName"
      - columnheader "Author"
      - columnheader "Subject"
      - columnheader "Price"
    - row "Learn Selenium Amit Selenium 300":
      - cell "Learn Selenium"
      - cell "Amit"
      - cell "Selenium"
      - cell "300"
    - row "Learn Java Mukesh Java 500":
      - cell "Learn Java"
      - cell "Mukesh"
      - cell "Java"
      - cell "500"
    - row "Learn JS Animesh Javascript 300":
      - cell "Learn JS"
      - cell "Animesh"
      - cell "Javascript"
      - cell "300"
    - row "Master In Selenium Mukesh Selenium 3000":
      - cell "Master In Selenium"
      - cell "Mukesh"
      - cell "Selenium"
      - cell "3000"
    - row "Master In Java Amod JAVA 2000":
      - cell "Master In Java"
      - cell "Amod"
      - cell "JAVA"
      - cell "2000"
    - row "Master In JS Amit Javascript 1000":
      - cell "Master In JS"
      - cell "Amit"
      - cell "Javascript"
      - cell "1000"
- heading "Dynamic Web Table" [level=2]
- table:
  - rowgroup:
    - row "Name CPU (%) Disk (MB/s) Network (Mbps) Memory (MB)":
      - columnheader "Name"
      - columnheader "CPU (%)"
      - columnheader "Disk (MB/s)"
      - columnheader "Network (Mbps)"
      - columnheader "Memory (MB)"
  - rowgroup:
    - row "Internet Explorer 2.1% 0.01 MB/s 7.9 Mbps 81.2 MB":
      - cell "Internet Explorer"
      - cell "2.1%"
      - cell "0.01 MB/s"
      - cell "7.9 Mbps"
      - cell "81.2 MB"
    - row "Firefox 3.9% 0.49 MB/s 0.1 Mbps 58.1 MB":
      - cell "Firefox"
      - cell "3.9%"
      - cell "0.49 MB/s"
      - cell "0.1 Mbps"
      - cell "58.1 MB"
    - row "Chrome 3.3% 0.66 MB/s 2.9 Mbps 54.5 MB":
      - cell "Chrome"
      - cell "3.3%"
      - cell "0.66 MB/s"
      - cell "2.9 Mbps"
      - cell "54.5 MB"
    - row "System 2.2% 0.22 MB/s 2.7 Mbps 45.2 MB":
      - cell "System"
      - cell "2.2%"
      - cell "0.22 MB/s"
      - cell "2.7 Mbps"
      - cell "45.2 MB"
- paragraph:
  - text: "CPU load of Chrome process:"
  - strong: 3.3%
- paragraph:
  - text: "Memory Size of Firefox process:"
  - strong: 58.1 MB
- paragraph:
  - text: "Network speed of Chrome process:"
  - strong: 2.9 Mbps
- paragraph:
  - text: "Disk space of Firefox process:"
  - strong: 0.49 MB/s
- heading "Pagination Web Table" [level=2]
- table:
  - rowgroup:
    - row "ID Name Price Select":
      - columnheader "ID"
      - columnheader "Name"
      - columnheader "Price"
      - columnheader "Select"
  - rowgroup:
    - row "1 Smartphone $10.99":
      - cell "1"
      - cell "Smartphone"
      - cell "$10.99"
      - cell:
        - checkbox
    - row "2 Laptop $19.99":
      - cell "2"
      - cell "Laptop"
      - cell "$19.99"
      - cell:
        - checkbox
    - row "3 Tablet $5.99":
      - cell "3"
      - cell "Tablet"
      - cell "$5.99"
      - cell:
        - checkbox
    - row "4 Smartwatch $7.99":
      - cell "4"
      - cell "Smartwatch"
      - cell "$7.99"
      - cell:
        - checkbox
    - row "5 Wireless Earbuds $8.99":
      - cell "5"
      - cell "Wireless Earbuds"
      - cell "$8.99"
      - cell:
        - checkbox
- list:
  - listitem:
    - link "1":
      - /url: "#"
  - listitem:
    - link "2":
      - /url: "#"
  - listitem:
    - link "3":
      - /url: "#"
  - listitem:
    - link "4":
      - /url: "#"
- complementary
- complementary:
  - heading "Tabs" [level=2]
  - link:
    - /url: https://wikipedia.org/wiki/
    - img
  - textbox
  - button "Submit"
  - heading "Dynamic Button" [level=2]
  - button "START"
  - heading "Alerts & Popups" [level=2]
  - button "Simple Alert"
  - button "Confirmation Alert"
  - button "Prompt Alert"
  - paragraph
  - button "New Tab"
  - button "Popup Windows"
  - heading "Mouse Hover" [level=2]
  - paragraph: Move the mouse over the button to open the dropdown menu.
  - button "Point Me"
  - heading "Double Click" [level=2]
  - text: "Field1:"
  - textbox: Hello World!
  - text: "Field2:"
  - textbox
  - button "Copy Text"
  - paragraph: Double click on button, the text from Field1 will be copied into Field2.
  - heading "Drag and Drop" [level=2]
  - paragraph: Drag me to my target
  - paragraph: Drop here
  - heading "Slider" [level=2]
  - paragraph:
    - text: "Price range:"
    - textbox "Price range:": $75 - $300
  - heading "SVG Elements" [level=2]
  - img
  - img
  - img
  - heading "Scrolling DropDown" [level=2]
  - textbox "Select an item"
  - heading "Labels And Links" [level=2]
  - heading "Mobile Labels" [level=4]
  - text: Samsung Real Me Moto
  - heading "Laptop Links" [level=4]
  - link "Apple":
    - /url: https://www.apple.com/
  - link "Lenovo":
    - /url: https://www.lenovo.com/
  - link "Dell":
    - /url: https://www.dell.com/
  - heading "Broken Links" [level=4]
  - link "Errorcode 400":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=400
  - link "Errorcode 401":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=401
  - link "Errorcode 403":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=403
  - link "Errorcode 404":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=404
  - link "Errorcode 408":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=408
  - link "Errorcode 500":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=500
  - link "Errorcode 502":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=502
  - link "Errorcode 503":
    - /url: http://www.deadlinkcity.com/error-page.asp?e=503
  - heading "Visitors" [level=2]
  - img "A chart."
  - table:
    - rowgroup:
      - row:
        - columnheader
        - columnheader
    - rowgroup:
      - row "0 56":
        - cell "0"
        - cell "56"
      - row "1 89":
        - cell "1"
        - cell "89"
      - row "2 91":
        - cell "2"
        - cell "91"
      - row "3 86":
        - cell "3"
        - cell "86"
      - row "4 85":
        - cell "4"
        - cell "85"
      - row "5 75":
        - cell "5"
        - cell "75"
      - row "6 61":
        - cell "6"
        - cell "61"
      - row "7 60":
        - cell "7"
        - cell "60"
      - row "8 82":
        - cell "8"
        - cell "82"
      - row "9 82":
        - cell "9"
        - cell "82"
      - row "10 76":
        - cell "10"
        - cell "76"
      - row "11 75":
        - cell "11"
        - cell "75"
      - row "12 78":
        - cell "12"
        - cell "78"
      - row "13 54":
        - cell "13"
        - cell "54"
      - row "14 52":
        - cell "14"
        - cell "52"
      - row "15 89":
        - cell "15"
        - cell "89"
      - row "16 100":
        - cell "16"
        - cell "100"
      - row "17 99":
        - cell "17"
        - cell "99"
      - row "18 90":
        - cell "18"
        - cell "90"
      - row "19 75":
        - cell "19"
        - cell "75"
      - row "20 62":
        - cell "20"
        - cell "62"
      - row "21 54":
        - cell "21"
        - cell "54"
      - row "22 82":
        - cell "22"
        - cell "82"
      - row "23 90":
        - cell "23"
        - cell "90"
      - row "24 83":
        - cell "24"
        - cell "83"
      - row "25 94":
        - cell "25"
        - cell "94"
      - row "26 72":
        - cell "26"
        - cell "72"
      - row "27 49":
        - cell "27"
        - cell "49"
      - row "28 41":
        - cell "28"
        - cell "41"
      - row "29 34":
        - cell "29"
        - cell "34"
  - text: 8,929,508
- contentinfo:
  - table:
    - rowgroup:
      - row "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files ShadowDOM Mobiles Laptops Blog Choose File Youtube":
        - cell "Form Section 1 This is a paragraph in Section 1. Submit Section 2 This is a paragraph in Section 2. Submit Section 3 This is a paragraph in Section 3. Submit Footer Links Home Hidden Elements & AJAX Download Files":
          - heading "Form" [level=2]
          - heading "Section 1" [level=4]
          - paragraph: This is a paragraph in Section 1.
          - textbox
          - button "Submit"
          - heading "Section 2" [level=4]
          - paragraph: This is a paragraph in Section 2.
          - textbox
          - button "Submit"
          - heading "Section 3" [level=4]
          - paragraph: This is a paragraph in Section 3.
          - textbox
          - button "Submit"
          - heading "Footer Links" [level=2]
          - list:
            - listitem:
              - link "Home":
                - /url: http://testautomationpractice.blogspot.com/
            - listitem:
              - link "Hidden Elements & AJAX":
                - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
            - listitem:
              - link "Download Files":
                - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
        - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube":
          - heading "ShadowDOM" [level=2]
          - text: Mobiles Laptops
          - link "Blog":
            - /url: https://www.pavantestingtools.com/
          - textbox
          - checkbox
          - button "Choose File"
          - link "Youtube":
            - /url: https://www.youtube.com/@sdetpavan/videos
  - text: Theme images by
  - link "merrymoonmary":
    - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
  - text: . Powered by
  - link "Blogger":
    - /url: https://www.blogger.com
  - text: .
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('demo',async ({page})=>
  4  | {
  5  |     await page.goto('https://testautomationpractice.blogspot.com/');
  6  |     
  7  |     const title = 'Automation Testing Practice';
  8  |     await expect(page).toHaveTitle(title);
  9  |     await expect(page.getByText('Data Entry Form'))
  10 |     //name
  11 |     await expect(page.locator('#name')).toBeVisible();
  12 |     await expect(page.locator('#name')).toBeEditable();
  13 |     await expect(page.locator('#name')).toBeEnabled();
  14 |     page.locator("#name").fill('kunal');
  15 |     await expect(page.locator('#name')).toHaveValue('kunal');
  16 |     //email
  17 |     await expect(page.locator('#email')).toBeVisible();
  18 |     await expect(page.locator('#email')).toBeEditable();
  19 |     await expect(page.locator('#email')).toBeEnabled();
  20 |     page.locator("#email").fill('kunal@test.com');
  21 |     await expect(page.locator('#email')).toHaveValue('kunal@test.com');
  22 |     //phone
  23 |     await expect(page.locator('#phone')).toBeVisible();
  24 |     await expect(page.locator('#phone')).toBeEditable();
  25 |     await expect(page.locator('#phone')).toBeEnabled();
  26 |     page.locator("#phone").fill('12345678');
  27 |     await expect(page.locator('#phone')).toHaveValue('12345678');
  28 |     //address
  29 |     await expect(page.locator('#textarea')).toBeVisible();
  30 |     await expect(page.locator('#textarea')).toBeEditable();
  31 |     await expect(page.locator('#textarea')).toBeEnabled();
  32 |     page.locator("#textarea").fill('address');
  33 |     await expect(page.locator('#textarea')).toHaveValue('address');
  34 |     //gender
> 35 |     await expect(page.getByRole('radio', {name:'gender'})).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  36 |     await expect(page.getByRole('radio', {name:'gender'})).toBeEditable();
  37 |     await expect(page.getByRole('radio', {name:'gender'})).toBeEnabled();
  38 |     await page.getByRole(('radio', {name:'gender'})).check();
  39 | 
  40 | });
```