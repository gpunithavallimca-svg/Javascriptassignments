import {test} from "@playwright/test"

test.describe('Lead Management',{
    tag:"@crmlead"
}, async () => {

    //test.describe.configure({mode:"parallel",retries:2})

    test('create lead',{annotation: {
     type: 'requirement',
     description: 'issueid: 23180',
      },
    }, async ({page}) => {

        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead is created");
     
        })

        test.fail('Edit lead', async ({page}) => {
        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead is edited");
        throw new Error("Edit lead is failed")
     
        })

        test.skip('duplicate lead', async ({page}) => {
        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead is duplicated");
     
        })
    

        test.fixme('Delete lead', async ({page}) => {
        await page.goto('https://leaftaps.com/opentaps/control/main')
        console.log("lead is deleted");
     
        })

        test('sample test',async () => {
            test.slow() //90000

            console.log(test.info().timeout);
            
            
        })
})

