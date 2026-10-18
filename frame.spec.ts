import {test,expect} from "@playwright/test"

test('Handle Confirm alert inside iframe',async ({page}) => {
//Navigate to URL
await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

//Switch to frame
let frame=page.frameLocator('#iframeResult')

//Handle confirm alert by clicking OK
page.once('dialog',async alert=>
{
    console.log('Confirm alert:',alert.message())
    //await page.waitForTimeout(2000)
    await alert.accept()
}
)

//Click Try it button inside iframe
await frame.getByRole('button',{name:'Try it'}).click()

//Verify display message
await expect(frame.locator('#demo')).toHaveText('You pressed OK!')
console.log('Webpage message:',await frame.locator('#demo').textContent())

})