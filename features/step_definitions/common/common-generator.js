const { When } = require("@cucumber/cucumber");


When('a random Email is generated', function () {
    try{
        this.testEmail = this.faker.internet.email();
    } catch (error) {
        console.error("\nError in step definition:\n", error);
    }
})

When('a random Password is generated', function () {
    try{
        this.testPassword = this.faker.internet.password({ prefix: "!1AT" });
    } catch (error) {
        console.error("\nError in step definition:\n", error);
    }
})