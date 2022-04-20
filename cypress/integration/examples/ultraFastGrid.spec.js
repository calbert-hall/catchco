describe("AppTest", () => {

    it.only(`ultraFastTest2`, function () {
        [
            "https://shopkarls.com/c/featured-products",
            "https://shopkarls.com/club", 
            "https://shopkarls.com", 
            "https://shopkarls.com/c/rods-reels/freshwater-rods-reels/casting-rods",
            "https://shopkarls.com/c/brands",
            "https://shopkarls.com/p/savage-gear-battletek-inshore-spinning-rod"
            
        ].forEach((url) => {
            cy.visit({
                url: url,
            });
            cy.eyesOpen({
                appName: 'CatchCo',
                testName: url,
            })

            // cy.get('.header-2qxpqL > .svelte-1ts7bep > #Capa_1').click({force: true})
            // cy.get('.footer-vwIx9x').invoke('attr', 'style', 'visibility: hidden')
            // cy.get('#layer0-devtools-main-div').invoke('attr', 'style', 'visibility: hidden')
            // cy.get('.amfpc-info').invoke('attr', 'style', 'visibility: hidden')
            
            cy.eyesCheckWindow({
                target: 'window',
                fully: true
            });
        
            cy.eyesClose()
        })
    }); 
});

    //TODO shopping workflow on this page: https://shopkarls.com/p/shimano-curado-k-casting-reel