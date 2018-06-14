
describe("Customer information Test",function(){


    var add_customer = require('../pages/AddCustomerDetails.js');
    it("Adding Customer Information",function()
    {
        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Amit","Mishra","560019");

    });

    var add_customer = require('../pages/AddCustomerDetails.js');

    it("Open Account",function(){

        add_customer.gotoOpenAccount();
        add_customer.openAccount("Amit Mishra","Rupee");

    }) ;


});
