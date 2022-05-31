
const AddNewItem = require("../pages/adroid/addItemToSreachOnWeb");

describe('Add New Item',()=>{

   it('Click oN Skip Tab',async()=>{
        await AddNewItem.clickoNSkipBtn();
    })

   it('Add New Item',async()=>{
       await AddNewItem.clickOnAddNewItem();
   }) 
    
   it('Click On Checklist Tab',async()=>{
       await AddNewItem.clickOnChecklist();
   })
   it('Check Add Items In List',async()=>{
       await AddNewItem.addItmInList();
   })
//    it('click to back tab',async()=>{
//       await AddNewItem.backPage();
// })
   it('Click on Amazon Option',async()=>{
       await AddNewItem.clickOnElpsisOption();
   })
//    it('Accept Chrome Browser Autherization',async()=>{ 
//        await AddNewItem.chromeVerification();
//    })
   it('Search Product',async()=>{
        
       await AddNewItem.searchProduct();
   })
   it('Add Product To the Cart',async()=>{
       await AddNewItem.addProductToCart();
   })

})