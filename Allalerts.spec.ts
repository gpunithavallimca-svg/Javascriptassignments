import {test,expect} from "@playwright/test"


test('Handle All Alerts',async ({page}) => {


await page.goto('https://www.leafground.com/alert.xhtml')

//Simple alert

page.once('dialog', async (alert) => {

console.log(alert.type())
await alert.accept()
  
})

await page.locator('//span[text()="Show"]').first().click()

// confirm alert
page.once('dialog', async (alert) => {

console.log(alert.type())
await alert.accept()
  
})
await page.locator('//span[text()="Show"]').nth(1).click()

//prompt alert
page.once('dialog', async (alert) => {

console.log(alert.type())
await alert.accept('Testleaf')
  
})
await page.locator('//span[text()="Show"]').nth(4).click()

await page.waitForTimeout(35000)

})