const data = require("../adroid/data")

class PostAStroy {


    get erroeMessageOfName() { return $('//android.widget.TextView[@text="'+data.errorMessText+'"]')}

    async verifyErrorWithoutDataInNameField(){
        const errorMess = await $('//android.widget.TextView[@text="'+data.errorMessText+'"]');
        if((await errorMess).isDisplayed(), true)
    {
         console.log("succesfull to get validation from input stream");
    }
    }

    async verifyBirthdayValidation(){
        const errorMess = await $('//android.widget.TextView[@text="'+data.errorMessBirthday+'"]')
        if((await errorMess).isDisplayed(),true){
            console.log("succesfull to get validation from birthday stream")
        }
    }

    async verifyLocationValidation(){
        const errorMess = await $('//android.widget.TextView[@text="'+data.errorMessLocation+'"]')
         if((await errorMess).isDisplayed(), true){
             console.log("succesfull to get validation from location stream")
         }
    } 




    

}
    module.exports = new PostAStroy(); 