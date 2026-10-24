import { test } from "@playwright/test"

test('learn window handling',async ({page,context}) => {

await page.goto('https://www.leafground.com/window.xhtml')



//click open and capture child window

//storing the reference of search box
// let searchBox=page.locator('[placeholder="Search Amazon.in"]')

// await searchBox.fill('iphone')

// await searchBox.press('Enter')

//register the event listener and create the promise

let pagePromise=context.waitForEvent('page')
await page.getByRole('button',{name:'Open',exact:true}).click()

//Capture Child window
let childPage=await pagePromise

//print Child page
await childPage.waitForLoadState()

//click action-triggering the new page

//await page.locator('(//span[contains(text(),"iPhone 17 Pro 256 GB: 15.93 cm")])[1]').click()

//resolve the promise and capture the new page ref

//let childPage = await pagePromise

//await childPage.waitForLoadState('domcontentloaded')

//child page title
let childPageTitle=await childPage.title()
console.log(childPageTitle)

//main page title
let pageTitle=await page.title()
console.log(pageTitle)

//bringToFront() 
//Enter email using Xpath

//await page.bringToFront()

await childPage.locator('//input[ @id="email"]').fill('testleaf@gmail.com')

await page.waitForTimeout(2000)
//Enter message
await childPage.locator("#message").fill('Playwright window handling')
await page.waitForTimeout(2000)

}
)