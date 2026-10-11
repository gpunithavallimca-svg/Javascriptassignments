import{chromium,test} from "@playwright/test"
test('Leaftaps login using Advanced Xpath',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    //enter User Name
    await page.locator('//input[@id="username"]').fill('democsr2')
    //Enter Password using axis
        await page.locator('//input[@id="username"]/following::input[@id="password"]').fill('crmsfa')
      
        //click login using ancestor axis
        
        await page.locator('//input[@id="username"]/ancestor::form//input[@value="Login"]').click()
        //Verify login
         let pageTitle=await page.title()
    console.log(pageTitle);
 let pageUrl=await page.url()
    console.log(pageUrl);
    console.log('Login test completed');
}
)
    