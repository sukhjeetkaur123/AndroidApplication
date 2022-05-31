// describe('Appium Test',()=>{

//     it('Example one',()=>{

   

//     });


//     });
const { AppiumDriver } = require("appium/build/lib/appium");

// describe('Sample',()=>{
//     it('Sample Test',async()=>{
//         const appOption = await $('~App');
    
//         // await driver.setImplicitWaitTimeout(5000);
//         await appOption.click();
        
//         // const actiobarTab = await $('~Action Bar');
//         // await expect(actiobarTab).toBeExisting();
//         // await actiobarTab.click();
//     });
//     xit('this test xases is not working bcease of x variable', async()=>{

//     });
//     it('find element by class name', async()=>{
//         const className= await $('android.widget.TextView');
        
//        console.log("text is:=>"+await className.getText());
//     //    assertion
//     await expect(className).toHaveText("API Demos");
//     });
//     it('find element by xpath', async()=>{
//         // xpath = (//tagname[@attribute=value])
//         await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

//         // xpath by resources id
//        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

//         // find by text
//         await $('//android.widget.TextView[@text="Command two"]').click();

//         // find by class assertion
//         const textAssertion = await $('//android.widget.TextView');
//         await expect(textAssertion).toHaveText("You selected: 1 , Command two");


//     });
    xit('Find element by UIAutomator', async()=>{
        // find element bt text contains
        await $('android=new UiSelector().textContains("Alert")').click();

    });
    // it('find a elements', async() =>{
    //     // find elements 
    //     const listText = await $$('android.widget.TextView');

    //     // loop
    //     for(const ele of listText){
    //         console.log("list:=>"+await ele.getText());
    //     }
    // })
    describe('working with text field', ()=>{
        it('click on view button', async()=>{
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Views")').click();

        })
        it('click on auto complete tab',async()=>{
            await $('//*[@text="Auto Complete"]').click();
        })
        it('click on second option',async()=>{
            await $('//*[@content-desc="1. Screen Top"]').click();
        })
        it('enter the value', async()=>{
            const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
            await textField.addValue('Canada');
        })
        it('verify the text',async()=>{
            await expect(textField).toHaveText('Canada');
        })
       
    });
     

        // enter country name
      

    //    assertion
     

    
    
    
