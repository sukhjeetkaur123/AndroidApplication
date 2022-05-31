const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver")

// describe('Andriod Native Feature Tests', ()=>{
//     await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples");

//     // assertion
//     await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
// });

describe('working with dailog boxes and scrolling',()=>{

    it.only('working with dialog boxes', async()=>{
        // const appOption = await $('~App');
    
        // // await driver.setImplicitWaitTimeout(5000);
        // await appOption.click();
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.ApiDemos");
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();
    
        // accept alert
        await driver.acceptAlert();
    
        // dismiss alert
        // await driver.dismissAlert();
        
        // get alert text
        console.log('Alert Text=>',await driver.getAlertText());
    
        // click on ok button
        // await $('//*[@resource-id="android:id/button1"]').click();
        
        // assertion
        // await $('//*[@resource-id="android:id/alertTitle"]')
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });
    // it('working with vertical scrolling', async()=>{
    //     await $('~App').click();
    //     await $('~Activity').click();
    //   	// scroll to end
    //       await $('android=New UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

    //     //   or
    //     // scrollTextView - most of use
    //     await $('android=New UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
    //     await $('~Secure Surfaces').click();
    //     // asertion
        	
    //     await expect($('~Secure Dialog')).toExist();

    
    // })
    
})
