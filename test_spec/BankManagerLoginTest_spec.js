var base = require('../pages/BasePage.js');
var OR = require('../json/OR.json');
var home_page = require('../pages/HomePage.js');
describe("BankManager Login Test",function(){

   it("Login as Bank Manager",function(){

       base.navigateToURL(OR.testsiteurl);
       var customer = home_page.loginAsBankManager();
       customer.gotoAddCustomer().addCustomerInfo(OR.locators.testdata.fName,OR.locators.testdata.lName,OR.locators.testdata.pCode).gotoOpenAccount().openAccount("Harry Potter","Rupee");
       var title = base.getPageTitle();
       expect(title).toBe("Protractor practice website - Banking App");
       browser.sleep(5000);

   }) ;


});
