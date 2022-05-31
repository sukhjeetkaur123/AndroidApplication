
const AddNotes = require("../pages/adroid/addNotes");
const DeleteNotes = require("../pages/adroid/deleteNote");
const ArchiveNote = require("../pages/adroid/archiveOnAddList");
const CalenderPicker = require("../pages/adroid/AddCalenderToNote");
const ViewNoteOption = require("../pages/adroid/viewNoteInDifferentOptions");
const Title = require("../pages/adroid/data");
const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");
describe('Add note', ()=>{
    it('click on skip button', async()=>{
        await AddNotes.clickOnSkipButton();
    })
    it('verify the add note tab', async()=>{
        await expect(AddNotes.verifyAddNoteTab).toBeDisplayed();

    })
    it('click on menu button', async()=>{
        await DeleteNotes.clickOnMenuTab();
    })
    it('click on calender button ',async()=>{
        await CalenderPicker.clickOnCalenderButton();
    })
    // it('verify and date dialog box and click on add button',async()=>{
    //     await CalenderPicker.verifyDateDialogBoxAndClickOnAddButton();
    // })
    // it('verify and click on add note',async()=>{
    //     await CalenderPicker.verifyTabAndClickONTextButton();
    // })
    it('click on add note', async()=>{
        await ViewNoteOption.clickOnAddNoteOption();
     })
     it('verify and click on add note',async()=>{
        await CalenderPicker.verifyTabAndClickONTextButton();
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
        await browser.back();
        await browser.pause(3000);
    })
    it('verify the calender tab and click on date',async()=>{
        await CalenderPicker.verifyCalenderTab();
    })


});