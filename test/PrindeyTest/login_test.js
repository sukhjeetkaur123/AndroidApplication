const { default: driver } = require("appium-uiautomator2-driver/build/lib/driver");
const AddLogin = require("../pages/Prindey/login");
const { searchButton } = require("../pages/Prindey/Serach_test");
const SerchTab =  require("../pages/Prindey/Serach_test");
const CheckValidate =  require("../pages/Prindey/loginWithInvalidCredentinal");
const { checkAppPresent } = require("appium-xcuitest-driver/build/lib/utils");

describe('Chech the Login Functiionality with valid and in valid data', ()=>{
    it('click on language button', async()=>{
        // await AddLogin.clickOnLanguageButton();
    })
    it('click on next button', async()=>{
        await AddLogin.clickOnNextButton();
    })
    it('verify interest tab and click on next button', async()=>{
        await AddLogin.verifyInterestTabAndClickOnNextButton();
    })
    it('verify interest tab and click on gender button', async()=>{
        await AddLogin.verifyInfoTabAndClickOnGender();
    })
    it('click on done button', async()=>{
        await AddLogin.clickOnDoneButton();
    })
    it('verify the validation of name tab if the data is not given there', async()=>{
        await CheckValidate.verifyErrorWithoutDataInNameField();
    })

    it('verify the validation of birthday tab if the data is not given there', async()=>{
        await CheckValidate.verifyBirthdayValidation();
    })
    it('verify the validation of birthday tab if the data is not given there',async()=>{
        await CheckValidate.verifyLocationValidation();
    })

    it('click on name field verify the name tab and fill the data', async()=>{
        await AddLogin.verifyTheNameTabAndEnterNameField();
        await AddLogin.clickOnDoneButton();
    })


    it('select the date from calender', async()=>{
         await AddLogin.selectDate();
    })
    it('verify the location tab and select the location', async()=>{
        await AddLogin.verifyAndsetLocation();
    })
    it('click on verify done button and to filled all fields', async()=>{
        await AddLogin.verifyAndClickOnDoneButton();

    })
    it('verify the welcome screen', async()=>{
        await AddLogin.verifyHomeScreen();
    //     await AddLogin.clickOnPost();
    // })
    // it('all setting of goggle', async()=>{
    //     await AddLogin.clickOnGoogleAccount();
    // })
    // it('rest of setting', async()=>{
    //     // await AddLogin.clickOnExtraSetting();
    })
});
   describe('verify and post a treval story', ()=>{

    it('click on search button', async()=>{
        await SerchTab.clickOnSerachButton();
    })
    it('verify and select name of follower on search button',async()=>{
        await SerchTab.verifySearchTabAndSelectName();
    })
    it('verify the profile which you selected',async()=>{
        await SerchTab.verifyProfileTab();
    })
    it('click on follow button',async()=>{
        await SerchTab.clickFollowButton();
    })
    it('all setting of goggle', async()=>{
        await AddLogin.clickOnGoogleAccount();
    })
    it('verify the profile which you selected',async()=>{
        await SerchTab.verifyProfileTab();
    })

   });

   describe('verify and chech the follow and message tab',()=>{
    it('click on follow button',async()=>{
        await SerchTab.clickFollowButton();
    })
    it('click on message button and verify tab', async()=>{
        await SerchTab.verifyMessageTab();
    })
  
});