import { Given, Then, When } from "@wdio/cucumber-framework";
import homeScreen from "../screenobjects/home-screen.js";
import loginScreen from "../screenobjects/login-screen.js";

Given(/^I am on the login page$/, async () => {
	await homeScreen.openMenu.waitForDisplayed();
   await homeScreen.openMenu.click();
   await homeScreen.login.waitForDisplayed();
   await homeScreen.login.click();
});

When("user enters username:{string} and password:{string}", async (username: string, password: string) => {
    await loginScreen.login(username, password);
  });  

When(/^user clicks on login button$/, async () => {
	await loginScreen.loginButton.waitForDisplayed();
    await loginScreen.loginButton.click();
});

Then(/^I should see a Products label$/, async () => {
    await homeScreen.product.waitForDisplayed();
});
