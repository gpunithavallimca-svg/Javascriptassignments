import{chromium,test} from "@playwright/test"
test('Explore Industry Dropdown in leaftaps',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
   //await page.locator('.decorativeSubmit').click()
    await page.locator('input[name="PASSWORD"]').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click()
    let pageTitle=await page.title()
    console.log(pageTitle);
 let pageUrl=await page.url()
    console.log(pageUrl);
    await page.getByRole('link',{name:'Leads',exact:true}).click()
    await page.locator('text=Create Lead').first().click()
       let industry=page.locator("select[name='industryEnumId']")
    await industry.waitFor({ state: 'visible', timeout: 10000 });
       let options=industry.locator('option')
            let count=await options.count()
        console.log("industry option count",count);
              for(let i=0;i<count ;i++)
        {
             let text=await options.nth(i).innerText()
            let value=await options.nth(i).getAttribute('value')
                  console.log(text+" | "+value);
           
                      }
                     
            
    }
    

)
    