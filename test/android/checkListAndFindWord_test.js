const CheckListAndFindElement = require("../pages/adroid/checkListAndFindWord");
const AddNewItem = require("../pages/adroid/addItemToSreachOnWeb");
const AddNotes = require("../pages/adroid/addNotes");
const Data = require("../pages/adroid/data");
const DeleteNotes = require("../pages/adroid/deleteNote");
describe('Add New Item',()=>{

   it('Click oN Skip Tab',async()=>{
        await AddNewItem.clickoNSkipBtn();
    })

   it('Add New Item',async()=>{
       await AddNewItem.clickOnAddNewItem();
   }) 
    
   it('Click On Checklist Tab',async()=>{
       await AddNewItem.clickOnChecklist();
   })
   it('click on edit title and value to tile',async()=>{
    await AddNotes.addValueInNoteTitle(Data.listName);
})
it('add a values under title',async()=>{
    await CheckListAndFindElement.clickOnNewItem();
//    await CheckListAndFindElement.fillDetailsOfCheckList(Data.Details)
    await CheckListAndFindElement.verifyAddNewItemBoxAndFillDetails(Data.Details);
})
it('click on ok button',async()=>{
    await CheckListAndFindElement.clickOnOkButton();
})
it('save the chages',async()=>{
    await browser.pause(3000);
    await browser.back();
    await browser.pause(3000);
    // await browser.back();
})
it('verify it saved or not',async()=>{

   await expect(AddNotes.verifySavedNotification).toBeDisplayed();
})
it('click on three dots', async()=>{
    await DeleteNotes.clickOnThreeDotesButton();

})
it('add value in text fieldS',async()=>{
    await CheckListAndFindElement.clickOnFindButton();
    await CheckListAndFindElement.clickAndAddValueIntoTextField();
})
it('click on back button',async()=>{
    await browser.pause(3000);
    await browser.back();
    await browser.pause(3000);
     await browser.back();
     await browser.pause(3000);
     await browser.back();
})
it('verify the tick and list', async()=>{
    await CheckListAndFindElement.verifyTickOnNoteAndList();
})

});