const H  = require("./data")
const Min  = require("./data")
const name = require("./data")
const birthday = require("./data")
class AddNoteReminder{

    get skipBttn(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
        }
    
    get addNotes(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/empty_text']");
    }
    get clickOnAddNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]')
    }
    
    get setTitleValue(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']")
    }
    
    get clickOnAddBtn(){
        return $("//*[@text='Text']") ;
    }
    
    get editTitle(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_title']");
    }
    
    get setEditValue(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit_note']");
    }
    
    get editButton(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/edit_btn']");
    }

    get elipsisMenuTab(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/menu_btn']");
     }

     get reminderTab(){
         return $("//*[@text='Reminder']");
     }

     get typeOption(){
         return $("//*[@text='None']");
     }

     get timeAlarmText(){
         return $("//*[@text='Time alarm']");
     }
     
     get reminderTime(){
         return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/reminder_time']");
     }
    
    get clickOnBoard(){
        return $("//android.widget.ImageButton[@resource-id='android:id/toggle_mode']");	
       
        
    
    }
    get clickOnHour(){
       	
        return $("//android.widget.EditText[@resource-id='android:id/input_hour']");		
       
 
    }	
    
    get minute(){
       	
      	
        return $("//android.widget.EditText[@resource-id='android:id/input_minute']");		
       
 
    }

    get clickOnMinValue(){
        return $("//android.widget.TextView[@text='"+Min.Minute+"']");
    }

    get clickOndropdown(){
        	
        	
        return $("//android.widget.Spinner[@resource-id='android:id/am_pm_spinner']");
    }
    
    get clickOnPm(){
       	
        return $("//android.widget.CheckedTextView[@text='PM']");
    }

    get clickOnOk(){
        return $("//*[@text='OK']");
    }

    get yearValue(){
        return $("//*[contains(text(),'Yearly')]");
    }

    get tapOnDone(){
        return $("//*[@text='DONE']");
    }

    async clickOnElipsisMenu(){
        await (await this.elipsisMenuTab).click();
    }

    async clickOnReminderTab(){
        await (await this.reminderTab).click();
    }
    async selectOptionAlarm(){
        await (await this.typeOption).click();
        await (await this.timeAlarmText).click();
        await (await this.reminderTime).click();
    }

    async clickOnKeyBoardOption(){
 
        await(await this.clickOnBoard).click();
    }
        
    async fillTheValueOfHour(){
        await (await this.clickOnHour).click();
        var today = new Date();
        console.log("current date and time"+today);
        var hour = today.getHours();
       
        if(hour>12){
            const actualHpur1=  hour-12;
            await (await this.clickOnHour).setValue(actualHpur1);
        }
        else{
            await (await this.clickOnHour).setValue(hour);
        }

       
    }
    async fillValueOfMinnute(){
        await browser.pause(4000);
        await (await this.minute).click();
        var today = new Date();
        var time =today.getMinutes();
        const minute = time+1;
        await (await this.minute).setValue(minute);
    } 
    async selectPmOption(){
        await (await this.clickOndropdown).click();
        await (await this.clickOnPm).click();
    }
    async clickOnOkButton(){
           
        await (await this.clickOnOk).click();
        await (await this.tapOnDone).click();
        await driver.back();
    }

    async verifyEditButton(){
        await expect(this.editButton).toBeDisplayed();
    }
    
    async addEditValue(){      
        await(await this.setEditValue).addValue(name.Name);
        }
    
    async backPage(){
        await driver.back();
        // await driver.back();
    }
    
    
    
     async addTitle(value){
        await(await this.setTitleValue).addValue(value);
    
        try {
           const titleText = await expect(this.setTitleValue).toHaveTextContaining('Birthday');
           console.log("The Title Text is :- "+ titleText);
           
        } catch (error) {
            console.log("Did Not Match the Title"+error);
        }
    }
     async clickOnAddNoteButton(){
         await(await this.clickOnAddNote).click();
         await(await this.clickOnAddBtn).click();
         
     }
     async clickOnSkipButton(){
         await(await this.skipBttn).click();
     }
    
     async verifyEditText(){
         await expect(this.editTitle).toBeDisplayed();
     }
     async getTime(){
      
      
        console.log("time is :"+minute);
     }

     async verifyRemionderTime(){


        // console.log('Alert Text=>',await driver.getAlertText());
          const actualTimeText = await $('//android.widget.EditText[@index="2"]')
        //  await actualTimeText.waitUntil(

        //     async function(){
        //     return(await this.getAlertText()==='Aman Birthday')
        //     },
           
        //     {
               
        //         timeout : 60000,
        //         timeoutMsg : 'The Text Is Not Visible'
        //     });
            
         await expect(actualTimeText).toHaveText(birthday.Birthday);
        //  const actualTitle = await $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')	
        //  await expect(actualTitle).toHaveText(birthday.Birthday);
         	
         
     }
    





}

module.exports = new AddNoteReminder();