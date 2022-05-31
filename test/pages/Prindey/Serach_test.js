const data = require("../adroid/data");
class SerachFunctionality {


//   get searchButton() { return $('//android.widget.ImageView[@index="1"]')}

    get profileText() { return $('//android.widget.LinearLayout[@text="'+data.searchNameText+'"]')}

    get followButton() { return $('//android.widget.Button[@text="'+data.button1+'"]')}

    get messageButton() { return $('//android.widget.Button[@text="'+data.button2+'"]')}

    get verifyMessTab()  { return $('//android.widget.TextView[@text="'+data.MessageText+'"]')}

    get enterText() { return $('//android.widget.EditText[@text="'+data.enterText+'"]')}

    get search(){ return $('//android.widget.ImageView[@index="1"]')}

    async verifyMessageTab(){
        await(await this.messageButton).click();
        await browser.pause(3000);
        if((await this.verifyMessTab).isDisplayed,true){
            await(await this.enterText).click();

        }
    }

    async clickFollowButton(){
        await(await this.followButton).click();
        await browser.pause(3000);
      
    
    }
    async verifyProfileTab(){
        await((await this.profileText).isDisplayed(),true);

    }

    async clickOnSerachButton(){
        await(await this.search).click();
    }

    async verifySearchTabAndSelectName(){
        const exploretext = await $('//android.widget.TextView[@text="'+data.exploretext+'"]');
        if((await exploretext).isDisplayed(),true)
        {
           const selectTextBox = await $('//android.widget.EditText[@index="1"]')
           await selectTextBox.click();
           await selectTextBox.setValue(data.searchNameText);
           await browser.pause(3000);
           const selcectName = await $('//android.widget.Button[@text="Ask"]')
           await selcectName.click();

        }
    }

}
module.exports = new SerachFunctionality();
