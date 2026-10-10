import{chromium,test} from "@playwright/test"
test('Salesforce Login Test',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('input[type="submit"]').click()
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('input[type="submit"]').click()
    await page.waitForLoadState("domcontentloaded")
    let pageTitle=await page.title()
    console.log(pageTitle);
 let pageUrl=await page.url()
    console.log(pageUrl);
}
)