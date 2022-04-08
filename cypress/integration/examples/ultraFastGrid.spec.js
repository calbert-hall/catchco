describe("AppTest", () => {

    it(`ultraFastTest`, function () {
       
        [
            'https://karls.qa.catchco.io/customer/account/login/',
            "https://karls.qa.catchco.io/c/apparel-1",
            "https://karls.qa.catchco.io/c/tackle/hard-baits/crankbaits",
            "https://shopkarls.com/c/featured-products",
            "https://shopkarls.com/club",
            "https://karls.qa.catchco.io/c/rods-reels",
            "https://karls.qa.catchco.io/c/shop/new",
            "https://shopkarls.com/p/shimano-curado-k-casting-reel"

        ].forEach((url) => {
            cy.visit({
                url: url,
            });
            cy.eyesOpen({
                appName: 'CatchCo',
                testName: url,
            })

            cy.get('.header-2qxpqL > .svelte-1ts7bep > #Capa_1').click({force: true})
            cy.get('.footer-vwIx9x').invoke('attr', 'style', 'visibility: hidden')
            cy.get('#layer0-devtools-main-div').invoke('attr', 'style', 'visibility: hidden')
            cy.get('.amfpc-info').invoke('attr', 'style', 'visibility: hidden')
            
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            });
        
            cy.eyesClose()
        })
        
    });
    //TODO shopping workflow on this page: https://shopkarls.com/p/shimano-curado-k-casting-reel
});
