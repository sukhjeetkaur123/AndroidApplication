const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");
const AddNotes = require("../pages/adroid/addNotes");
const list1 = require("../pages/adroid/data");
const list2 = require("../pages/adroid/data");
const list3 = require("../pages/adroid/data");
const ViewNoteOption = require("../pages/adroid/viewNoteInDifferentOptions");
const DeleteNotes = require("../pages/adroid/deleteNote");

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
    it('veify the note body is displayed or not', async()=>{
      await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
      .toHaveText("JAck\nRack\nPack");

    })
    it('click to back tab',async()=>{
        await browser.back();
    })
});
describe('Add note', ()=>{
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
        await AddNotes.addValueInNoteTitle(list2.List2);
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
    it('click to back tab',async()=>{
        await browser.back();
    })
});
describe('Add note', ()=>{
 
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
        await AddNotes.addValueInNoteTitle(list3.List3);
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
    it('click to back tab',async()=>{
        await browser.back();
    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on view button', async()=>{
        await ViewNoteOption.clickOnViewButton();
    })
    it('verify view box and click on option', async()=>{
        await ViewNoteOption.verifyViewBoxAndClickGridOption();
    })
    it('verify the list', async()=>{
        await ViewNoteOption.verifyListOption();

    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on view button', async()=>{
        await ViewNoteOption.clickOnViewButton();
    })
    it('verify view box and click on option', async()=>{
        await ViewNoteOption.verifyViewBoxAndClickListOption();
    })
    it('verify the list', async()=>{
        await ViewNoteOption.verifyListOption();

    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on view button', async()=>{
        await ViewNoteOption.clickOnViewButton();
    })
    it('verify view box and click on option', async()=>{
        await ViewNoteOption.verifyViewBoxAndClickDetailOption();
    })
    it('verify the details', async()=>{
        // await ViewNoteOption.verifyDetailView();
        await ViewNoteOption.verifyListOption();

    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on view button', async()=>{
        await ViewNoteOption.clickOnViewButton();
    })
    it('verify view box and click on option', async()=>{
        await ViewNoteOption.verifyViewBoxAndClickLargeGridOption();
    })
    it('verify the list', async()=>{
        await ViewNoteOption.verifyListOption();

    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on search button', async()=>{
        await ViewNoteOption.clickOnSearchButton();
    })
    it('enter the value in search bar ', async()=>{
        await ViewNoteOption.fillTheValueInSearchBar();
    })
    it('click the selected item from list', async()=>{
        await ViewNoteOption.clickOnSelectedList();
    })
    it('verify the list after the serch', async()=>{
        await ViewNoteOption.verifyListAfterSearch();
    })
    it('click to back tab',async()=>{
        await browser.back();
        await browser.back();
    })
    it('click on three dots', async()=>{
        await DeleteNotes.clickOnThreeDotesButton();

    })
    it('click on sorting', async()=>{
        await ViewNoteOption.clickOnSortButton();
    })
    it('select alphabatic sorting', async()=>{
        await ViewNoteOption.clickOnByAlphabaticalySorting();
    })
    it('verify the list is sorted',async()=>{
        await ViewNoteOption.verifySortedList();
    })


});