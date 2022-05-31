const list1 = require("./data")
class AddArciveOption{
    get archiveButton(){
        return $('//android.widget.TextView[@text="Archive"]')	
        
    }
    async verifyArchiveSvreenAndList(){
        if((await this.archiveButton).isDisplayed(),true){
            const listText= await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')	
            
            await expect(listText).toHaveText(list1.List1);	
           	
            
        }
    }
    async clickOnArchiveButtonInMenuBar(){
        await (await this.archiveButton).click();
    }
    async clickOnArchiveButton(){
        await(await this.archiveButton).click();
    }

    async verifyArchiveAlertBox(){
        if((await this.archiveButton).isDisplayed(),true){
            const okButton = await $('//android.widget.Button[@index="1"]')
            await okButton.click();
        }	
        
    }
}
module.exports = new AddArciveOption();