const { test, expect } = require("@playwright/test");
const { SignInPage } = require("../../pages/LogIn/signInPage");

test("SignIn as Standard User", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Verify that the page title contains “Swag Labs”
  await expect(page).toHaveTitle(/Swag Labs/);

  // Create an instance of the Sign In Page Object
  const SignInP = new SignInPage(page);
  await SignInP.SignInDetails("standard_user", "secret_sauce");

  // waiting for landing page to load.
  await page.waitForLoadState("networkidle");

  //asserting the successful log in.
  await expect(SignInP.appLogo).toBeVisible();
  await page.screenshot({ path: "Screenshots/screenshots/SignInPage.png" });

  // Sign Out Process  
  await SignInP.SignOutDetails();

  // Verify that the user is logged out by checking the presence of the login button
  await expect(SignInP.SignInBtn).toBeVisible();      

});
