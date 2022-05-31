const { browserLinkoption } = require("./addItemBritish")
const Option = require("./data")
class AddCheckListAndFindWord{

    get value(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        
    } 
    get selectItem(){
        return $('//android.widget.TextView[@text="'+Option.addItem+'"]')	
        
    }
    get okButton(){
        return $('//android.widget.Button[@text="'+Option.Button+'"]')	
        
    }
    get findButton(){
        return $('//android.widget.TextView[@text="'+Option.find+'"]')	
        
    }
    get findText(){
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/find_edit"]')
      
    }
  get verifyListAferFinding(){
      return $('//android.widget.TextView[@text="'+Option.List+'"]')	
      
  }
 
    async clickAndAddValueIntoTextField(){
      
    //     const arrayString = Option.Details;
    //   const p = arrayString.replaceAll(" ",",");
    //   const array = [p];
    //   const va =  array.indexOf("kaur");
    //   console.log("the vluew of="+va);
      let text = Option.Details;
const myArray = text.split(" ");
 const arr= myArray[3]; 
    console.log("the vluew of="+myArray[3]);
    console.log("the vluew ="+arr);
        await(await this.findText).click();
        await(await this.findText).setValue(arr);
      
        // await(await this.findText).browser.keys(['Meta', 'Enter']);
       
        // await(await this.findText).setValue(Keys.ENTER)
        // selenium.keyPressNative("10");
    
        const clickSearch = await $('//android.widget.ImageButton[@index="2"]')
        await clickSearch.click();	
        
        await browser.pause(3000);
    }
   async verifyTickOnNoteAndList(){
        const tick = await $('//android.widget.ImageView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/type_image"]');
        if((await tick).isDisplayed(),true)
        {
            const text = await $('//android.widget.TextView[@text="'+Option.listName+'"]');
            
            await expect(text).toHaveText(Option.listName);	
        }
        
    }
    async clickOnFindButton(){
        await(await this.findButton).click();
    }
    async clickOnOkButton(){
        await(await this.okButton).click();
    }
    async clickOnNewItem(){
        await(await this.selectItem).click();
    }
   async verifyAddNewItemBoxAndFillDetails(text){
     if((await this.selectItem).isDisplayed(),true){
            const addText = await $('//android.widget.EditText[@index="0"]');
            await(await addText).setValue(text)	
            
        }
    }

    async fillDetailsOfCheckList(details){
        await(await this.value).setValue(details);
    }
}
module.exports = new AddCheckListAndFindWord();