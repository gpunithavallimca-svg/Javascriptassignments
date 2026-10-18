import {test , expect} from "@playwright/test"



test('storagestate auth file creation',async ({page}) => {

await page.goto('https://login.salesforce.com/')


//retry assertion
await expect (page.getByAltText('Salesforce login')).toBeVisible()

await page.getByRole('textbox',{name:"Username"}).fill('gpunithavallimca.b140bca3f536@agentforce.com')

await page.getByRole('button',{name:"Log In"}).click()

//await page.getByRole('textbox',{name:"Password"}).fill('Qeagle@123')
await page.getByLabel('Password').fill('Shriram@123')

await page.getByRole('button',{name:"Log In"}).click()

await page.waitForTimeout(35000)

await page.context().storageState({path:'Data/sflogin.json'})

//await page.getByTitle('App Launcher').click()


})