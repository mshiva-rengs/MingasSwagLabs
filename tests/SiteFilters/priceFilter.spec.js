const { test, expect } = require("@playwright/test");
const { SignInPage } = require("../../pages/LogIn/signInPage");
const { PricePage } = require("../../pages/Filters/PricePage");

test("Apply Price Filter Low to High", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);

  const SignInOBJ = new SignInPage(page);
  await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

  const priceLowtoHighObj = new PricePage(page);
  await priceLowtoHighObj.priceFilterDetailsLowtoHigh();

  const productPrices = await page
    .locator(".inventory_item_price")
    .allTextContents();
  const sortedPrices = [...productPrices].sort(
    (a, b) => parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
  );
  expect(productPrices).toEqual(sortedPrices);
  await page.screenshot({ path: "PriceFilterLowtoHigh.png" });
});

test("Apply Price Filter High to Low", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle(/Swag Labs/);

  const SignInOBJ = new SignInPage(page);
  await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

  const priceLowtoHighObj = new PricePage(page);
  await priceLowtoHighObj.priceFilterDetailsLowtoHigh();

  const productPrices = await page
    .locator(".inventory_item_price")
    .allTextContents();
  const sortedPrices = [...productPrices].sort(
    (a, b) => parseFloat(b.replace("$", "")) - parseFloat(b.replace("$", ""))
  );
  expect(productPrices).toEqual(sortedPrices);
  await page.screenshot({ path: "PriceFilterLowtoHigh.png" });
});
