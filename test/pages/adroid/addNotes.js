class AddNoteScreen{
    get skipButton(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']")
    }
    get verifyAddNoteTab(){
        return $('//*[@text="Add note"]')
    }
    get clickAddNote(){
        return $('//*[@text="Add note"]')
    }
    get clickOnTex(){
        return $('//*[@text="Text"]')
    }
    get fillTitle(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }
    get verifySavedNotification(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    async addValueInNoteTitle(value){
        await (await this.fillTitle).setValue(value);
    }

    async clickOnTextButton(){
        await(await this.clickOnTex).click();
    }

    async clickOnAddNoteButton(){
        await(await this.clickAddNote).click();
    }
    async clickOnSkipButton(){
        await(await this.skipButton).click();
    }

}
module.exports = new AddNoteScreen();