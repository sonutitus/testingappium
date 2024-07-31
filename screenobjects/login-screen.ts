/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginScreen {
    get username() {
      return $("~Username input field");
    }
  
    get password() {
      return $("~Password input field");
    }
  
    get loginButton() {
      return $("~Login button");
    }
  
    async login(username: string, password: string ) {
      await this.username.waitForDisplayed();
      await this.username.click();
      await this.username.setValue("");
      await this.username.setValue(username);
  
      // Select and enter password
      await this.password.click();
      await this.password.setValue(password);
      // Clicking enter to minimize the keyboard opened for entering text
      await driver.keys(["\uE007"]);
      // // Click the Sign in button
      // await this.loginButton.click();
    }
  }
  
  export default new LoginScreen();