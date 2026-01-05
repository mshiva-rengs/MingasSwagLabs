const { test, expect } = require("@playwright/test");
const { SignInPage } = require("../../pages/LogIn/signInPage");
const { ClearTrolleyPage } = require("../../pages/Trolley/ClearTrolleyPage");

test("Remove item from trolley", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);

  const wantedTshirt = "Sauce Labs Bolt T-Shirt";

  const SignInOBJ = new SignInPage(page);
  await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

  const TrolleyPageOBJ = new ClearTrolleyPage(page);
  await TrolleyPageOBJ.selectTshirt(wantedTshirt);
  await TrolleyPageOBJ.TrolleyDetails();
});
