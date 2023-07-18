describe("Test task",  () => {
    let temp = 0;
    beforeEach("", () => {
        cy.visit("https://rozetka.com.ua/ua");
        cy.request(Cypress.env('request')).then(response => {
            assert.equal(200, response.status);
        })
        cy.get('.header__logo > .ng-star-inserted > img').should('be.visible');
        cy.url().should('include', 'rozetka.com');
    });
    it("Add items to basket", () => {
        const randomNumber = getRandomInt(1, 5);
        cy.get(':nth-child(' + randomNumber.toString() + ') > .main-categories__link').click();
        cy.get('.menu-main > :nth-child(' + randomNumber.toString() + ') > .menu-main__link > .menu-main__link-title').click();
        cy.get(':nth-child(' + randomNumber.toString() + ') > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title')
        .click();
        cy.price('.product-price__big')
            .then($value =>{
            temp = temp + parseInt($value);
            Cypress.env("price", temp);
        });
        cy.get('.mode-slim > .buy-button').click();
        cy.get('[data-testid="continue-shopping-link"]').click();
        cy.get('.header-menu > .header__button').click();
        cy.get(':nth-child(1) > #fat-menu').click();
        cy.get(':nth-child(2) > .menu-main__link > .menu-main__link-title').click();
        cy.get('.menu-main > :nth-child(' + randomNumber.toString() + ') > .menu-main__link > .menu-main__link-title').click();
        cy.get(':nth-child(' + randomNumber.toString() + ') > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title').click();
        cy.price('.product-price__big')
            .then($value =>{
            temp = temp + parseInt($value);
            Cypress.env("price", temp);
            console.log(Cypress.env("price"));
        });
        cy.get('.mode-slim > .buy-button').click();
        cy.price('.cart-receipt__sum-price > :nth-child(1)').should(($value) => {
            expect($value).to.be.equal(Cypress.env("price"));
        });
        cy.get(':nth-child(1) > rz-cart-product > .cart-product > .cart-product__body > .cart-product__main > [data-testid="title"]').should('be.visible');
        cy.get(':nth-child(2) > rz-cart-product > .cart-product > .cart-product__body > .cart-product__main > [data-testid="title"]').should('be.visible');
        cy.get('#cartProductActions0').click();
        cy.get('.popup-menu__actions > :nth-child(1) > .ng-star-inserted > .button').should('be.enabled');
        cy.get('#cartProductActions1').click();
        cy.get('.popup-menu__actions > :nth-child(1) > .ng-star-inserted > .button').should('be.enabled');
    });
    it("Search the item", () => {
        const randomNumber = getRandomInt(1, 9) - 1;
        cy.get('.search-form__input').type(Cypress.env('itemsList')[randomNumber]);
        cy.get('.search-form > .button').click();
        cy.get(':nth-child(1) > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title')
        .contains(Cypress.env('itemsList')[randomNumber]
        ,{matchCase:false});
        cy.get(':nth-child(2) > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title')
        .contains(Cypress.env('itemsList')[randomNumber]
        ,{matchCase:false});
        cy.get(':nth-child(9) > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title')
        .contains(Cypress.env('itemsList')[randomNumber]
        ,{matchCase:false});
        cy.get(':nth-child(10) > rz-catalog-tile.ng-star-inserted > app-goods-tile-default > .goods-tile > .goods-tile__inner > .goods-tile__heading > .goods-tile__title')
        .contains(Cypress.env('itemsList')[randomNumber]
        ,{matchCase:false});
    });
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
