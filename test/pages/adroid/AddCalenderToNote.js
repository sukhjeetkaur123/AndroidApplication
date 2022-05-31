const { text } = require("./data")
const optionText = require("./data")
class AddCalenderOption{
    get calenderButton(){
        return $('//android.widget.TextView[@text="'+optionText.text+'"]')	  
    }
    get datePicker(){
        return $('//android.widget.TextView[@text="'+optionText.date+'"]')	
        
    }
    get addButton(){
        return $('//android.widget.TextView[@text="'+optionText.add+'"]')
    }
    get textButton(){
        return $('//android.widget.TextView[@text="'+optionText.text1+'"]')	
        
    }
    async verifyTabAndClickONTextButton(){
        const textNoteTab = await $('//android.widget.TextView[@text="'+optionText.text1+'"]');
        if((await textNoteTab).isDisplayed(),true){
            await(await this.textButton).click();
         }
        
     }
    async verifyDateDialogBoxAndClickOnAddButton(){
        if((await this.datePicker).isDisplayed(),true){
            await(await this.addButton).click();
        }
    }
    async verifyCalenderTab(){
        await((await this.calenderButton).isDisplayed(),true);
         

        }
    async clickOnCalenderButton(){
        await(await this.calenderButton).click();
    }

}
module.exports = new AddCalenderOption();