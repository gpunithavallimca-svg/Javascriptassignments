import {test} from "@playwright/test"


import data from "../../../Data/leaf.json" with {type:"json"}

// console.log(data.username)//democsr2
// console.log(data.password)//crmsfa

//iterate using for loop to read multiple set of data

for(let credentials of data) {
    
test(`learn to read data from JSON file ${credentials.TCID}`, async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill(credentials.username)
await page.locator('#password').fill(credentials.password)

await page.locator('.decorativeSubmit').click()
    
})

}