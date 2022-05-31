const data = require("../adroid/data");
class LoginFunctionality {

    get selectLanguage(){  return $('//*[@rescource-id="com.travelpartner.parindey:id/name"]')}
    
    get verifyInterestTab(){  return $('// android.widget.TextView[@text="Your Interests"]')}

    get nextButton(){  return $("//*[@text ='NEXT']")}

    get nameField(){  return $('//android.widget.EditText[@text="'+data.nameField+'"]')}

    get nameText(){  return $('//android.widget.EditText[@index="1"]')}

    get done() {  return $('//android.widget.ImageButton[@index="2"]')}

    get button() { return $('// android.widget.Button[@text="DONE"]')}

    get date(){  return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("'+data.date+'")')}

    get locationField(){  return $('//android.widget.EditText[@text="'+data.location+'"]')}

    get locationTextField() {  return $('//*[@rescource-id="com.travelpartner.parindey:id/search_bar"]')}

    get dateField() { return $('//android.widget.EditText[@text="'+data.born+'"]')}
     
    get verifyHome() { return $('//android.widget.TextView[@text="'+data.homeText+'"]')}

    get clickPost() { return $('//android.widget.FrameLayout[@index="2"]')}

    get googleAcc() { return $('//android.widget.Button[@text="LOGIN WITH GOOGLE"]')}

    get emailText() { return $('//android.widget.EditText[@index="0"]')}

    get nextButton() { return $('//android.widget.Button[@index="0"]')}

    get password() { return $('//android.widget.EditText[@index="0"]')}

    get extraNotification() { return $('//android.widget.Button[@content-desc="Turn on Backup"]')}

    get agreeButton() { return $('//android.widget.Button[@index="0"]')}

    get acceptButton() { return $('//android.widget.Button[@text="ACCEPT"]')}

    get selectAcc()  { return $('//android.widget.TextView[@index="0"]')}

    get AddStroyButton() { return $('//android.widget.TextView[@text="Add A Travel Story"]')}

    get snapShot() {  return $('//android.widget.TextView[@text="Shot"]')}

    get cemra() { return $('//android.widget.ImageView[@index="0"]')}

    get doneClickOnCemera() { return $('//android.widget.ImageButton[@content-desc="Done"]')}

    get completeButton() { return $('//android.widget.TextView[@index="3"]')}

    get tickButton() { return $('//android.widget.TextView[@index="0"]')}

    get privious() { return $('//android.widget.ImageView[@index="0"]')}


    async clickOnExtraSetting(){
        await(await this.extraNotification).click();
        await(await this.agreeButton).click();
        await(await this.acceptButton).click();
        await(await this.clickPost).click();
    }

    async clickOnGoogleAccount(){
        await(await this.googleAcc).click();
        // await(await this.emailText).setValue("harikepunjab@gmail.com");
        // await(await this.nextButton).click();
        // await(await this.password).setValue("50192Prince");
        // await(await this.nextButton).click();
        await(await this.selectAcc).click();
        // await(await this.clickPost).click();
        // await(await this.AddStroyButton).click();
        // await(await this.privious).click();
        // await(await this.completeButton).click();
        // ///////////////////////////////////////////////////


        
        // await(await this.snapShot).click();
        //  await(await this.cemra).click();
        
        // await(await this.doneClickOnCemera).click();
        // await(await this.completeButton).click();
        await(await this.tickButton).click();
        await(await this.clickPost).click();



    }

    async clickOnPost(){
        await browser.pause(3000);
        await(await this.clickPost).click();
        await browser.pause(3000);
    }

    async verifyHomeScreen() {
        await(await this.verifyHome).isDisplayed();
    }



    async verifyAndClickOnDoneButton() {
         if((await this.button).isDisplayed(),true) {
              await(await this.button).click();
         }
    }

    async verifyAndsetLocation() {
        await(await this.locationField).click();
        const verifyLocationtab = await $('//android.widget.TextView[@text="'+data.verifyNameText+'"]');
        if((await verifyLocationtab).isDisplayed(),true)
        {
           const selectLocation = await $('//android.widget.TextView[@text="'+data.locationText+'"]')
           await selectLocation.click();
        }
    }

    async selectDate() {
        await browser.pause(3000);
        await(await this.dateField).click();
        await(await this.date).click();
        await(await this.done).click();
    }

    async clickOnDoneButton() {
        await(await this.done).click();
    }

    async verifyTheNameTabAndEnterNameField() {
        await(await this.nameField).click();
        const nameTab = await $('//android.widget.TextView[@text="'+data.verifyNameText+'"]');
        if((await nameTab).isDisplayed(),true)
        {
           await(await this.nameText).setValue(data.nameText);
        }
    }

    async verifyInterestTabAndClickOnNextButton() {
        if((await this.verifyInterestTab).isDisplayed(),true) {
            await(await this.nextButton).click();
        }
    }

    async verifyInfoTabAndClickOnGender(){ 
        const infoTab = await $('//android.widget.TextView[@text="'+data.verifyText+'"]');
        if((await infoTab).isDisplayed(),true)
        {
            const gender = await $('//android.widget.TextView[@text="'+data.gender+'"]');
            await gender.click();	
        }
    }

    async clickOnLanguageButton(){
        await(await this.selectLanguage).click();
    }
    async clickOnNextButton(){
        await(await this.nextButton).click();
    }

}
module.exports = new LoginFunctionality();