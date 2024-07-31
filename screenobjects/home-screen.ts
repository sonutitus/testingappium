/**
 * sub page containing specific selectors and methods for a specific screen
 */
class HomeScreen {
    get openMenu() {
      return $("//android.view.ViewGroup[@content-desc='open menu']/android.widget.ImageView");
    }
  
    get login() {
      return $("~menu item log in");
    }

    get product() {
      return $("//android.widget.TextView[@text='Products']");
    }
  }
  
  export default new HomeScreen();
  