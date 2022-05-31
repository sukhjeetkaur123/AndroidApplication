const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver")

describe('working with date picker',()=>{

    it('select a date and srolling where it need', async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1");
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="19"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();
        await expect(await date.getText()).not.toEqual(currentDate);
    
    })
});

    describe('Android Native Feature',()=>{

        it.only('Date Pick',async()=>{
    
    
    
            // await $('~Views').click();
    
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")').click();
    
            await $('~Date Widgets').click();
    
            await $('~1. Dialog').click();
    
            const currentDate = await $("//android.widget.TextView[@resource-id='io.appium.android.apis:id/dateDisplay']").getText();
    
            console.log("Current Date is :- " + currentDate);
    
           
    
            await $('~change the date').click();
    
            await $('android= new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
    
            await $('~10 May 2022').click();
    
            const selectedDate = await $('~10 May 2022').getText();
    
            console.log("The Selected Date :- "+selectedDate);
            
    
    
        })
        it('select time ', async()=>{
        	
            const time = await $('~change the time (spinner)');
            await time.click();
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
            await $('//*[@text="11"]').click();
    
    
    
        })
    })
 
