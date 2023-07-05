/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My second test case",  function(){
    
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
       cy.get('.products').find('.product').each(($el,index,$list) => {
        const vegName = $el.find('h4.product-name').text();
        if (vegName.includes('Capsicum')) {
           cy.wrap($el).find('button').click();
        }
       })
       cy.get('.cart-icon > img').click();
       cy.get('button[type = "button"]').contains('PROCEED TO CHECKOUT').click(); 
       // or cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('div button').contains('Place Order').click();
        //or cy.get('button').click()  as it it is the only button in page
       
    
    })
    
    })  