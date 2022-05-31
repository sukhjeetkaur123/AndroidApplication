const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");
const AddLockScreen = require("../pages/adroid/addLock");
const AddNotes = require("../pages/adroid/addNotes");
const Title = require("../pages/adroid/data");
const DeleteNotes = require("../pages/adroid/deleteNote");

describe('Add note', ()=>{
    it('click on skip button', async()=>{
        await AddNotes.clickOnSkipButton();
    })
    it('verify the add note tab', async()=>{
        await expect(AddNotes.verifyAddNoteTab).toBeDisplayed();
    })
    it('click on add note', async()=>{
       await AddNotes.clickOnAddNoteButton();
    })
    it('click on text button',async()=>{
        await AddNotes.clickOnTextButton();
    })
    it('verify the note tab',async()=>{
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
    })
    it('click on edit title and value to tile',async()=>{
        await AddNotes.addValueInNoteTitle(Title.List);
    })
    it('add a values under title',async()=>{
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        .setValue("JAck\nRack\nPack");
    })
    it('save the chages',async()=>{
        await browser.back();
        await browser.back();
    })
    it('verify it saved or not',async()=>{
	
       await expect(AddNotes.verifySavedNotification).toBeDisplayed();
    })
    it('veify the note body is displayed or not', async()=>{
      await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
      .toHaveText("JAck\nRack\nPack");

    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on lock button', async()=>{
        await AddLockScreen.clickOnLockButton();
    })
    it('selection of acc', async()=>{
        await AddLockScreen.selectOptionForAcc();
    })
    it('select the details of acc', async()=>{
        await AddLockScreen.selectChromAndItsDetails();
       
       
    })
    it('accept and continue',async()=>{
        
        await AddLockScreen.fillDetail();
        await AddLockScreen.clickOnNextButton();
        await AddLockScreen.clickOnAcceptAndContiued();

    })
});