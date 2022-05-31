const Title = require("./data")
class DeleteNoteScreen{
    get clickOnCurrentNote(){
        return $('//*[@rescource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }
    get threeDots(){
        return $('//android.widget.ImageButton[@content-desc="More"]')
    }
    get deleteButton(){
        return $('//*[@text="Delete"]')
    }
    get clickMenu(){
        return $('//android.widget.ImageButton[@index="0"]')
    }
    get trashButton(){
        return $('//*[@text="Trash Can"]');
    }
    get verifyCurrentNote(){
        return $('//*[@rescource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }




    async clickOnTrashButton(){
        await(await this.trashButton).click();
    }
    async clickOnMenuTab(){
        await browser.pause(3000);
        await(await this.clickMenu).click();
    }
    async clickOnDeleteButton(){
        await(await this.deleteButton).click();
    }
    async clickOnThreeDotesButton(){
        await(await this.threeDots).click();
    }
    async clickONCurrentAddNote(){
        const noteText = await $('//*[@text="'+Title.List+'"]');
        await noteText.click();
    }
    async verifyDeletedNote(){
        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        await expect(trashCanItem).toHaveText(Title.List);
    }

    
}
module.exports = new DeleteNoteScreen();