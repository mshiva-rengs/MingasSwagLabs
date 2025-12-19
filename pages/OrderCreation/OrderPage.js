const { expect } = require("@playwright/test");

class OrderPage {
    constructor(page)
    {
        this.page = page;



        this.addTshirtBtn = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.cartBtn= page.locator('.shopping_cart_link');
        this.checkoutBtn =page.locator('#checkout');
        this.checkoutNameField = page.locator('#first-name');
        this.checkoutLNameField = page.locator('#last-name');
        this.postaCodeField = page.locator('#postal-code');
        this.continueCheckoutBtn = page.locator('#continue');
        this.CheckoutFinishBtn = page.locator('#finish');
        this.orderconfirmationmssg = page.locator('.complete-header');
        this.backHomeBtn = page.locator('#back-to-products');

    }


        async selectTshirt(wantedTshirt){
            const Tshirt = this.page.locator('.inventory_item').filter({ hasText: wantedTshirt});
            await expect(Tshirt).toBeVisible();
            await Tshirt.locator('button').click();
           // await addTshirtBtn.click();
        
            
        }

    
        async orderDetails(checkoutGama, checkoutSbongo, checkoutPostalC){

            await this.cartBtn.click();
            await this.checkoutBtn.click();
            await this.checkoutNameField.fill(checkoutGama);
            await this.checkoutLNameField.fill(checkoutSbongo);
            await this.postaCodeField.fill(checkoutPostalC);
            await this.continueCheckoutBtn.click();
            await this.CheckoutFinishBtn.click();
            await expect(this.orderconfirmationmssg).toBeVisible();
            await this.page.screenshot({ path: "Screenshots/screenshots/OrderConfirmationPage.png" });
            await this.backHomeBtn.click();
            console.log(this.wantedTshirt);
            console.log(this.orderconfirmationmssg);
        

        }

    }

module.exports = {OrderPage};