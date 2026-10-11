

import {chromium,test,expect} from  "@playwright/test"
test('Validate textboxes in leafground input page',async({page})=>{
    //Part 1 :Navigate to the page
   await page.goto('https://leafground.com/input.xhtml')
   //Part 2: Validate Disabled Textbox
    await expect(page.locator('//input[@placeholder="Babu Manickam"]')).toBeEnabled()
   //Part 3: Validate Enabled Textbox
   let nameTextbox=page.locator('//input[@placeholder="Babu Manickam"]')
      await expect(nameTextbox).toBeEditable()
     await nameTextbox.fill('Test Leaf')
   
   //part 4:Soft Assertion
     await expect.soft(nameTextbox).toBeDisabled()
   //part 5:Clear existing text and enter new value
   await nameTextbox.clear()
   await nameTextbox.fill('Playwright learning')
}
)