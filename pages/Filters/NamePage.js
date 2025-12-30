class NamePage {
  constructor(page) {
    this.page = page;

    this.filterDrpDwn = page.locator(".product_sort_container");
  }
  async nameFilterDetailsAtoZ() {
    await this.filterDrpDwn.selectOption("az");
  }

  async nameFilterDetailsZtoA() {
    await this.filterDrpDwn.selectOption("za");
  }
}

module.exports = { NamePage };
