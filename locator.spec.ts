import {test , expect} from "@playwright/test"

test('login to leaftaps application',async ({page}) => {
//Navigate to application
await page.goto('https://leaftaps.com/opentaps/control/main')


//Enter username

await page.getByRole('textbox',{name:"Username"}).fill('democsr2')

//Enter password
await page.getByLabel('Password').fill('crmsfa')

//Click Login button

await page.getByRole('button',{name:"Login"}).click()

//Verify login
await expect(page.getByText('CRM/SFA')).toBeVisible()

  
})