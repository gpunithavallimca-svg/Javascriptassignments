import {test} from "@playwright/test"


import data from "../../../Data/leaf1.json" 

// console.log(data.username)//democsr2
// console.log(data.password)//crmsfa

//iterate using for loop to read multiple set of data

for(let credentials of data) {
    
test(`learn to read data from JSON file ${credentials.TCID}`, async ({page}) => {

await page.goto('https://login.salesforce.com/')

await page.locator('#username').fill(credentials.username)
await page.getByRole('button',{name:"Log In"}).click()
await page.locator('#password').fill(credentials.password)
await page.getByRole('button',{name:"Log In"}).click()

//await page.waitForTimeout(35000)

//await page.locator('.decorativeSubmit').click()
    
})

}