
/// <reference types="Cypress" />
describe('My 8th Test', function(){

    it("My 8th test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       // cy.get('#mousehover')
       //cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')
   })
            
})