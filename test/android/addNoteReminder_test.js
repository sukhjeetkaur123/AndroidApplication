
const { getTime } = require("../pages/adroid/addNoteReminder");
const AddNoteReminder = require("../pages/adroid/addNoteReminder");

const Title = require("../pages/adroid/data");

describe('Add Note Reminder',()=>{

    it('Click On Skip Button',async()=>{
        await AddNoteReminder.clickOnSkipButton();
    })
    
    //Verify Add_Note Tab
    it('Verify The Add Note Tab',async()=>{
           await expect(AddNoteReminder.addNotes).toBeDisplayed();
    })
    
    //Click on Add Button
    it('Click on Add Button', async()=>{
        await AddNoteReminder.clickOnAddNoteButton();
    })
    
    //Verify edit Screen
    it('Verify Edit Screen',async()=>{
          await AddNoteReminder.verifyEditText();
     })
    
    //Enter the Title in Text Field
    it('Enter The Title', async()=>{
        await AddNoteReminder.addTitle(Title.Birthday);
    })
    
    //Enter The Text in Edit Field       
    it('Enter Values Under Title', async()=>{
        await AddNoteReminder.addEditValue();
    })
    
    //Click on Back Button
    it('Saved Value & Back to Tab', async()=>{
        await AddNoteReminder.backPage();
    })

    it('Set The Reminder',async()=>{
        await AddNoteReminder.clickOnElipsisMenu();
        
    })
    it('click on reminder button',async()=>{
        await AddNoteReminder.clickOnReminderTab();
        await AddNoteReminder.getTime();
    })
    
    it('select alarm option',async()=>{
        await AddNoteReminder.selectOptionAlarm();
    })

    it('click on keyBoard option',async()=>{
        await AddNoteReminder.clickOnKeyBoardOption();
    })

    it('set the hours value',async()=>{
        await AddNoteReminder.fillTheValueOfHour();
    })

    it('enter the value of minute',async()=>{
        await AddNoteReminder.fillValueOfMinnute();
    })

    it('select option of PM',async()=>{
        await AddNoteReminder.selectPmOption();
    })
    
    it('click on OK button',async()=>{
        await AddNoteReminder.clickOnOkButton();
    })

    it('verify the alarm reminder', async()=>{
        await AddNoteReminder.verifyRemionderTime();
    })






    // //Verify Edit Button
    // it('Verify Edit Button', async()=>{
    //     await AddNoteReminder.verifyEditButton();
        
    // })

})