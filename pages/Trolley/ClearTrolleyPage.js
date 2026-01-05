const { expect } = require("@playwright/test");

class ClearTrolleyPage {
  constructor(page) {
    this.page = page;
    this.cartBtn = page.locator(".shopping_cart_link");
    this.removeBtn = page.locator("#remove-sauce-labs-bolt-t-shirt");   
  }

  async selectTshirt(wantedTshirt) {
    const Tshirt = this.page
      .locator(".inventory_item")
      .filter({ hasText: wantedTshirt });
    await expect(Tshirt).toBeVisible();
    await Tshirt.locator("button").click();
  }

  async TrolleyDetails( ) {
    const cartBtn = this.page.locator(".shopping_cart_link");
    const removeBtn = this.page.locator(
      "#remove-sauce-labs-bolt-t-shirt"
    );
    await this.cartBtn.click();
    await expect (removeBtn).toBeVisible();
    await this.removeBtn.click();
    await this.page.screenshot({ path: "Screenshots/screenshots/ClearedTrolley.png" });
  }
}
module.exports = { ClearTrolleyPage };