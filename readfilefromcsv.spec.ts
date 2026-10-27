import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'


// let value=fs.readFileSync('Data/leaf.csv','utf-8')
// console.log(value);

/* without UTF
<Buffer 74 63 69 64 2c 75 73 65 72 6e 61 6d 65 2c 70 61 73 73 77 6f 72 64 0d 0a 74 63 30 30 31 2c 64 65 6d 6f 63 73 72 32 2c 63 72 6d 73 66 61 0d 0a 74 63 30 ... 17 more bytes> 

with UTF
tcid,username,password
tc001,democsr2,crmsfa
tc002,democsr,crmsfa*/


let value:any=parse(fs.readFileSync('Data/leaf.csv','utf-8'),{columns:true,skip_empty_lines:true})
// console.log(value);
// console.log(typeof value);//object

/* [
  { tcid: 'tc001', username: 'democsr2', password: 'crmsfa' },
  { tcid: 'tc002', username: 'democsr', password: 'crmsfa' }
] */

//   console.log(value[0].username);//democsr2
//   console.log(value[0].password);//crmsfa

test.describe.serial('run the test in serial mode', async () => {
    
for(let credentials of value) {
    
test(`learn to read data from JSON file ${credentials.tcid}`, async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')

await page.locator('#username').fill(credentials.username)
await page.locator('#password').fill(credentials.password)

await page.locator('.decorativeSubmit').click()
await page.waitForTimeout(2000)
    
})

}

})