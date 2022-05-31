const { clickOnLockButton } = require("./addLock");
const expectedList1 = require("./data")
const expectedList2 = require("./data")
const expectedList3 = require("./data")
const list = require("./data")

class AddViewOption{
    get addNote(){
       return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]') 
    }
    get viewButton(){
        return $('//android.widget.LinearLayout[@index="2"]')	
        
    }
    get gridButton(){
        return $('//android.widget.LinearLayout[@index="2"]')	
       
    }
    get listButton(){
        return $('//android.widget.LinearLayout[@index="0"]')	
       
    }
    get detailButton(){
        return $('//android.widget.TextView[@index="1"]')	
       
    }
    get largeGridButton(){
        return $('//android.widget.TextView[@index="1"]')	
       
    }
    get searchButton(){
        return $('//android.widget.TextView[@text="Search"]')	
        
    }
    get enterValue(){
        return $('//android.widget.EditText[@index="1"]')
    }
    get selctList(){
        return $('//android.widget.TextView[@index="0"]')	
       
    }
    get verifyList(){
        return $('//android.widget.EditText[@index="2"]')	
       
    }
    get sortButton(){
        return $('//android.widget.TextView[@text="Sort"]')
    }
    get byAlphabatically(){
        return $('//android.widget.TextView[@text="'+list.sorting+'"]')
    }
    get verifyTextOfSorting(){
        return $('android.widget.TextView[@text="Sort alphabetically ▼"]')
    }

    async verifySortedList(){
        expect(this.verifyTextOfSorting).toHaveTextContaining(list.sorting);
        
    }
    async clickOnByAlphabaticalySorting(){
        await(await this.byAlphabatically).click();
    }
    async clickOnSortButton(){
        await(await this.sortButton).click();
    }

    async verifyListAfterSearch(){
        expect(this.verifyList).toHaveTextContaining(list.List3);
    }
    async clickOnSelectedList(){
        await(await this.selctList).click();
    }
    async fillTheValueInSearchBar(){
        await(await this.enterValue).setValue(list.List3);
    }
    	
    async clickOnSearchButton(){
        await(await this.searchButton).click();
    }

    	


    	

    async verifyListOption(){
        	
        // const actualList1= await $('//android.widget.TextView[@bounds="[12,302][344,365]"]');
        	
    //     const text = await $$('android.widget.TextView')
        
    //     const expected = [expectedList1.List1,expectedList2.List2,expectedList3.List3] 

    //     //      , 'Graphics','Media','NFC','OS','Preference','Text','Views']
        

    //      const actualList = []



    //     // const textList = await $$('android.widget.TextView[@index="0"]');

    //     for(const element of text){
    //   const getvalueOne = actualList.push(await element.getText());

    //     //  const getvalueTwo =    actualList.push(await element);
    //     // console.log("The Array List Value is :- "+ element);
    //      console.log("The Array List Value is :- "+ getvalueOne);
   
    //      await expect(actualList).toEqual(expected);

    //     }
     

        // const actualList2= await $('//android.widget.TextView[@bounds="[367,302][699,365]"]');
    //    const element1 = await text.getText();
    //     const element2 = await actualList2.getText();
    //     // const hh = await $('//android.widget.GridView[@index="0"]')
    //     console.log("text:"+ await actualList1.getText());
    //     console.log("te=>"+element1);
    //     console.log("tex=>"+element2);
    //     // console.log("text=>"+ await hh.getText());
    //     console.log("lisy=>"+expectedList3.List3);
  
    //      await expect(actualList1).toHaveText("Apple");
    //      await expect(actualList2).toHaveText("Mango");
    //      await expect(text).toHaveText("Grapes");	
    const text = await $('//android.widget.TextView[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
        
      const e=  await text.getText();
       console.log("the text is"+e);
       await expect(text).toHaveText(expectedList3.List3);
       
        
    }

    async verifyDetailView(){
        const element = await $('//android.widget.TextView[@index="4"]')
        var today = new Date();
        var hour =today.getHours();
        var minute =today.getMinutes();
        const actualTime = hour+":"+minute
        console.log("the time is :"+actualTime);
        await expect(element).toHaveTextContaining(actualTime);
        
    }
    async verifyViewBoxAndClickGridOption(){
        const viewOptionBox = await $('//android.widget.TextView[@index="0"]');
        if((await viewOptionBox).isDisplayed(),true){
            await(await this.gridButton).click();

        }

    }
    async verifyViewBoxAndClickListOption(){
        const viewOptionBox = await $('//android.widget.TextView[@index="0"]');
        if((await viewOptionBox).isDisplayed(),true){
            await(await this.listButton).click();

        }

    }
    async backPage(){
        await driver.back();
        // await driver.back();
    }
    async verifyViewBoxAndClickDetailOption(){
        const viewOptionBox = await $('//android.widget.TextView[@index="0"]');
        if((await viewOptionBox).isDisplayed(),true){
            await(await this.detailButton).click();

        }

    }
    async verifyViewBoxAndClickLargeGridOption(){
        const viewOptionBox = await $('//android.widget.TextView[@index="0"]');
        if((await viewOptionBox).isDisplayed(),true){
            await(await this.largeGridButton).click();

        }

    }
   async clickOnViewButton(){
       await(await this.viewButton).click();
   }

    async clickOnAddNoteOption(){
        await(await this.addNote).click();
    }
}
module.exports = new AddViewOption();