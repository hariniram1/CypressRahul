//cypress
//Test file in cypress is spec file

/// <reference types="Cypress" />
describe('My First Test', function(){

it("My first test case",  function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
   cy.get('.product:visible').should('have.length',4); 
   //cy.get('.product').should('have.length',4);
   cy.get('.products').as('productslocator')
   cy.get('@productslocator').find('.product').should('have.length',4);
   cy.wait(2000);
  //cy.get('@productslocator').find('.product').eq(2).contains('ADD TO CART').click();
   //cy.get(':nth-child(2) > .product-action > button').click(); 
   
   cy.get('@productslocator').find('.product').each(($el,index,$list) => {
    const vegName = $el.find('h4.product-name').text();
    if (vegName.includes('Capsicum')){
       cy.wrap($el).find('button').click();
    }
   })
   
   console.log(cy.get('.brand'));

    cy.get('.brand').then(function(logovalue){
    cy.log(logovalue.text());
    cy.get(logovalue).should('have.text', "GREENKART");
   })
 
  
   console.log('hello');


})

})  