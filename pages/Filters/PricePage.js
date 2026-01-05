class PricePage {
  constructor(page) {
    this.page = page;

    this.filterDrpDwn = page.locator(".product_sort_container");
  }

  async priceFilterDetailsLowtoHigh() {
    await this.filterDrpDwn.selectOption("lohi");
  }
}
module.exports = { PricePage };