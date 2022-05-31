class AddLockScreen{

    get lockButton(){
        return $('//*[@text="Lock"]')
    }
    get selectChrome(){
        	
        return $('//android.widget.LinearLayout[@index="1"]')
    }
    get selctDetail(){
        return $('//android.widget.Button[@index="1"]')	
       
    }
    get option(){
        	
        return $('//android.widget.Button[contains(text(),"SIGN IN WITH GOOGLE")]')
    }
    get acceptAndConitued(){
        return $('//android.widget.Button[@index="1"]')	
        
    }
    get fillAccDetail(){
        return $('// android.widget.EditText[@index="0"]')	
       
    }
    get password(){
        	
        return $('//android.widget.EditText[@index="0"]')
    }
    get nextButton(){
        	
        return $('//android.widget.Button[@index="0"]')
    }
    get noThanks(){
        return $('//android.widget.Button[@index="0"]')
    }

    async clickOnNextButton(){
        await(await this.nextButton).click();
    }
    async fillDetail(){
        // await driver.dismissAlert();
        // const alert = 
        // await $('//android.widget.Button[@index="1"]');
        // //  await alert.waitForClickable({timeout:4000});
        // await alert.click();
        await browser.pause(4000);
        await(await this.fillAccDetail).setValue("harikepunjab@gmail.com")
        await browser.pause(4000);
        // await(await this.nextButton).waitForClickable();
        await(await this.nextButton).click();
        await(await this.password).setValue("50192Prince");
        await(await this.nextButton).click();
        
    }
    async clickOnAcceptAndContiued(){
        if((await this.acceptAndConitued).isDisplayed(),true){
            await browser.pause(6000);
            await(await this.acceptAndConitued).click();
            await browser.pause(4000);
            await(await this.noThanks).click();
        }
       
    }

   async selectOptionForAcc(){
   	
    const opt = await $('//android.widget.Button[@index="1"]');
       await opt.click();
   }

   async selectChromAndItsDetails(){
     
       const verifyTab = await $('//android.widget.TextView[@index="0"]');	
    //    com.socialnmobile.dictapps.notepad.color.note:id/alertTitle
        if((await verifyTab).isDisplayed(),true){
        
       
           	
            const dropDownOfSelectChrome = await $('//android.widget.Spinner[@index="0"]');	
        //    await dropDownOfSelectChrome.waitForClickable({timeout:3000});
           await dropDownOfSelectChrome.click();
           await(await this.selectChrome).click();
        //    await(await this.selctDetail).waitForClickable({timeOut:3000});
           await(await this.selctDetail).click();
           await browser.pause(3000);
           
         }

       
   }

    async clickOnLockButton(){
        await(await this.lockButton).click();
    }
}
module.exports = new AddLockScreen();