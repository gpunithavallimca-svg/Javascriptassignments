import {test , expect} from "@playwright/test"

test.use({

    storageState:'Data/sflogin.json'
})

test('skip login using storage state',async ({page}) => {

await page.goto('https://orgfarm-a897ebfccf-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome')

await page.waitForTimeout(2000)


})