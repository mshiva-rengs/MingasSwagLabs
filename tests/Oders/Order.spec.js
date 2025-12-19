const { test, expect } = require("@playwright/test");
const { SignInPage } = require("../../pages/LogIn/signInPage");
const { OrderPage } = require('../../pages/OrderCreation/OrderPage');


test('Create and order a t-shirt', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); 
  await expect(page).toHaveTitle(/Swag Labs/);


  const wantedTshirt = 'Sauce Labs Bolt T-Shirt';

  const SignInOBJ = new SignInPage(page);
   await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

   const OrderPageOBJ = new OrderPage(page);
  await OrderPageOBJ.selectTshirt(wantedTshirt);
  
  await OrderPageOBJ.orderDetails('mphoza','mcGee','1632');




});