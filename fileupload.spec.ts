import {test} from "@playwright/test"

import path from 'path'

test('to upload file using <input type=file>',async ({page}) => {


await page.goto('https://www.leafground.com/file.xhtml')

//direct upload
//await page.locator('(//input[@type="file"])[1]').setInputFiles('Data/Qeagle.png')


//using variable reference
let fileupload=page.locator('(//input[@type="file"])[1]')

await fileupload.setInputFiles('Data/Qeagle.png')
    
})



test.only('to upload file using event listener',async ({page}) => {

await page.goto('https://the-internet.herokuapp.com/upload')

//register the listerner and create the promise

let fileuploadlistener=page.waitForEvent('filechooser')

//trigger the click action

await page.locator('[id="drag-drop-upload"]').click()

//resolve the promise 

let uploadWindow=await fileuploadlistener

//using the uploadWindow reference, we  can upload the file

//relative path for file upload
//await uploadWindow.setFiles('Data/TestLeaf Logo.png')

//absolute path for file upload

await uploadWindow.setFiles(path.join(__dirname,'../../../Data/example.png'))

console.log(__dirname);


//PS C:\Users\admin\OneDrive - TestLeaf Software Solutions Private Limited\Documents\Playwright\PW_26thSEP_WE_2026\tests\Day10>
})