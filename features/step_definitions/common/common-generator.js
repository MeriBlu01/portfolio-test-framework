const { When } = require("@cucumber/cucumber");


When('a random Email is generated', function () {
    try{
        this.testEmail = this.faker.internet.email();
    } catch (error) {
        console.error("\nError in step definition:\n", error);
    }
})