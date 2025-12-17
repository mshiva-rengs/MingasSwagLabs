const { test, expect } = require("@playwright/test");
const { OrderPage } = require('../../pages/OrderCreation/OrderPage');
const { SignInPage } = require("../../pages/LogIn/signInPage");
const { Sign } = require("crypto");

test('Create and order a t-shirt', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); 
  await expect(page).toHaveTitle(/Swag Labs/);


  const SignInOBJ = new SignInPage(page);
   await SignInP.SignInDetails("standard_user", "secret_sauce");

   const OderPageOBJ = new OrderPage(page);
   OderPageOBJOderDetails();





















});