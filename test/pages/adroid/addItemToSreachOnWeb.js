const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");

class AddNewItem {

    get skipBtn(){
            return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip']");
            }
    get addNoteTab1() {
                return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]');
            }
    get checkListsTab(){
                return $("//*[@text='Checklist']");
            }
    get addItmTab(){
                return $("(//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/icon'])[1]"); 
    }
    
    get addItmText(){
        return $("//*[@resource-id ='com.socialnmobile.dictapps.notepad.color.note:id/edit']");
    }
    
    get oKButton(){
        return $("//*[@text ='OK']");
    }
    
    get elipsisOption(){
        return $("//*[@resource-id='com.socialnmobile.dictapps.notepad.color.note:id/image']");
    }
    
    get amazonOption(){
        return $("//*[@text='Amazon Search']");
    }
    
    get continueOption(){    
        return $("//android.widget.Button[@resource-id='com.android.chrome:id/terms_accept']");
    }
    
    get noThanksOption(){
        return $("//android.widget.Button[@resource-id='com.android.chrome:id/negative_button']");
    }
    
    get amazonPay(){
        // return $("//android.view.View[@text='Amazon Pay']");
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Amazon Pay")')
    
        
    }
    
    get amazonSearchOption(){
        // return $("//android.view.View[@text='Clear search keywords']");
        // return $('~nav-search-keywords');
        return $("//android.widget.EditText[@resource-id='nav-search-keywords']");
        // return $("//android.widget.EditText[@index='1']")
        	
       
    }
    
    get goTab(){
        
        	
        return $('//android.widget.Button[@bounds="[924,252][1055,367]"]')	
        
    }
    
    get productLink(){
        // return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Aircraft Carrier Toy,with 5 Aircrafts Includes Destroyer Ship 4.5 out of 5 stars578")');
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg Low Sodium Iodised Salt · 1 kg (Pack of 1) 4.6 out of 5 stars 9,856 product-detail")')
        // return $("//android.view.View[@text='Tata Salt Lite, 15% Low Sodium Iodised Salt, 1kg Low Sodium Iodised Salt · 1 kg (Pack of 1) 4.6 out of 5 stars 9,856 product-detail']");
    }
    get productLink1(){
        return $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView('Thomas Street Lime and Basil Leaf Soy Wax Scented Candle')")
     
    }
    get addToCartTab(){
        return $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView('Add to cart']");
        
    }
    // get addToCartTab(){
    //     return $("//android.widget.Button[@text='Add to Cart']");
    // }
    
    get productQuantity(){
        return $("//android.view.View[@resource-id='quantity-label-C680db4ca-df98-4205-bd7e-89b83f8f3627']");
       }
    
    get productCartQuantity(){
        return $("//android.view.View[@text='Cart']");
       }
       get openMenu(){
        return $("//android.widget.Spinner[@text='Open menu']");
    }
    get newInLink(){
        return $("//android.view.View[@text='New In']");
    }
    
            async clickoNSkipBtn(){
                await (await this.skipBtn).click();
            }
            
            async clickOnAddNewItem(){
                await (await this.addNoteTab1).click();
            }
    
            async  clickOnChecklist(){
                await (await this.checkListsTab).click();
            }
    
            async addItmInList(){
                await (await this.addItmTab).click();
                await (await this.addItmText).addValue("www.amazon.in");
                await (await this.oKButton).click();
                await browser.pause(3000);
                await browser.back();
                // await browser.pause(3000);
                // await browser.back();
            
            }
            // async clickOnAcceptCookies(){
            //     const accpet = await $('//android.widget.Button[@index="1"]');
            //     await accpet.click();
            //     browser.pause(3000);
            //     await(await this.openMenu).click();
            //     browser.pause(3000);
            //     await (await this.newInLink).click();
            //     browser.pause(3000);
            //     await (await this.productLink1).click();
            //     browser.pause(3000);
            //     await(await this.addToCartTab).click();
            //     browser.pause(3000);
            // }
            
            async clickOnElpsisOption(){
                await (await this.elipsisOption).click();
                await browser.pause(3000);
            }
    
            async chromeVerification(){           
                await (await this.continueOption).click();
                await (await this.noThanksOption).click();     
                     
            }
    
            async searchProduct(){
                // await (await this.amazonSearchOption).waitForClickable({timeout :30000});
                await (await this.amazonSearchOption).click();
                await (await this.amazonSearchOption).addValue("Tata Salt Lite");
               
                //  await (await this.amazonSearchOption).keys(['Meta', 'Enter']);
                // await (await this.amazonPay).waitForClickable({timeout :30000});
                // await (await this.amazonPay).click();
                await browser.pause(3000);
                await (await this.goTab).click();
    
            }
    
            async addProductToCart(){
                // await (await this.productLink).waitForClickable();
                await browser.pause(3000);
                await (await this.productLink).click();
                await browser.pause(6000);
                await (await this.addToCartTab).click();    
                await browser.pause(3000);
               

            }
            // async backPage(){
            //     await browser.back();
            //     await browser.back();
            //     // await driver.back();
            // }
    
    
    
    
        
    
    
    
    }
    module.exports = new AddNewItem();