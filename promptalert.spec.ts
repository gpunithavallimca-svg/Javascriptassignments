import {test} from "@playwright/test"


test('Handle Prompt Dialog',async ({page}) => {


await page.goto('https://www.leafground.com/alert.xhtml')



page.on('dialog', async (alert) => {

let alertype=alert.type()
console.log(alertype)
    
let alertmessage=alert.message()
console.log(alertmessage)

if(alertype==="prompt"){

await alert.accept("Testleaf")

}else{

await alert.dismiss()
  
}
    
})

//simple or alert
//await page.locator('//span[text()="Show"]').first().click()

// confirm alert
//await page.locator('//span[text()="Show"]').nth(1).click()

//prompt alert
await page.locator('//span[text()="Show"]').nth(4).click()

await page.waitForTimeout(35000)

})