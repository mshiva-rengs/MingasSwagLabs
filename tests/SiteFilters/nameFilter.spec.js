const { test, expect } = require("@playwright/test");
const { SignInPage } = require("../../pages/LogIn/signInPage");
const { NamePage } = require("../../pages/Filters/NamePage");

test("Apply Name Filter A to Z", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Verify that the page title contains “Swag Labs”
  await expect(page).toHaveTitle(/Swag Labs/);

  const SignInOBJ = new SignInPage(page);
  await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

  const nameAtoZObj = new NamePage(page);
  await nameAtoZObj.nameFilterDetailsAtoZ();
  //////////////////////////////////////////////////////////////////////////////////////////
  // Get all product names
  const productNames = await page
    .locator(".inventory_item_name")
    .allTextContents();

  // Assert the FIRST product is alphabetically smallest
  expect(productNames[0]).toBe("Sauce Labs Backpack");

  // Assert the LAST product is alphabetically largest
  expect(productNames[productNames.length - 1]).toBe(
    "Test.allTheThings() T-Shirt (Red)"
  );

  await page.screenshot({ path: "NameFilterAtoZ.png" });
});

test("Apply Name Filter Z to A", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  // Verify that the page title contains “Swag Labs”
  await expect(page).toHaveTitle(/Swag Labs/);

  const SignInOBJ = new SignInPage(page);
  await SignInOBJ.SignInDetails("standard_user", "secret_sauce");

  const nameZtoAObj = new NamePage(page);
  await nameZtoAObj.nameFilterDetailsZtoA();

  const productNames = await page
    .locator(".inventory_item_name")
    .allTextContents();

  const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));

  expect(productNames).toEqual(sortedNames);
  await page.screenshot({ path: "NameFilterZtoA.png" });
});
