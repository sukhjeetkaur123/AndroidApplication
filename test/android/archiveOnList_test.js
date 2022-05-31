const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");
const AddNotes = require("../pages/adroid/addNotes");
const list1 = require("../pages/adroid/data");
const list2 = require("../pages/adroid/data");
const list3 = require("../pages/adroid/data");
const ViewNoteOption = require("../pages/adroid/viewNoteInDifferentOptions");
const DeleteNotes = require("../pages/adroid/deleteNote");
const ArchiveNote = require("../pages/adroid/archiveOnAddList");

describe('Add note', ()=>{
    it('click on skip button', async()=>{
        await AddNotes.clickOnSkipButton();
    })
    it('verify the add note tab', async()=>{
        await expect(AddNotes.verifyAddNoteTab).toBeDisplayed();
    })
    it('click on add note', async()=>{
       await ViewNoteOption.clickOnAddNoteOption();
    })
    it('click on text button',async()=>{
        await AddNotes.clickOnTextButton();
    })
    it('verify the note tab',async()=>{
        await expect($('//*[@text="Editing"]')).toBeDisplayed();
    })
    it('click on edit title and value to tile',async()=>{
        await AddNotes.addValueInNoteTitle(list1.List1);
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
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on archive button', async()=>{
        await ArchiveNote.clickOnArchiveButton();
    })
    it('verify the archive box and click on ok button',async()=>{
        await ArchiveNote.verifyArchiveAlertBox();
    })
    it('verify the add note tab', async()=>{
        await expect(AddNotes.verifyAddNoteTab).toBeDisplayed();
    })
    it('click on menu button', async()=>{
        await DeleteNotes.clickOnMenuTab();
    })
    it('click on archive button in menu tab',async()=>{
        await ArchiveNote.clickOnArchiveButtonInMenuBar();
    })
    it('verify the archive tav and list', async()=>{
        await ArchiveNote.verifyArchiveSvreenAndList();
    })
});