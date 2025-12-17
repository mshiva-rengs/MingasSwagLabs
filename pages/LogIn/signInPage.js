class SignInPage {
  constructor(page) {
    this.page = page;

    this.usernameField = page.locator("#user-name");
    this.passwordField = page.locator("#password");
    this.SignInBtn = page.locator("#login-button");
    this.appLogo = page.locator(".app_logo");
    this.BMenu = page.locator("#react-burger-menu-btn");
    this.LogOutBtn = page.locator("#logout_sidebar_link");
  }

  // Fill username, password and click Login.
  async SignInDetails(usernameP, passwordP) {
    await this.usernameField.fill(usernameP);
    await this.passwordField.fill(passwordP);
    await this.SignInBtn.click();
  }
  async SignOutDetails() {
    await this.BMenu.click();
    await this.LogOutBtn.click();
  }
}

module.exports = { SignInPage };
