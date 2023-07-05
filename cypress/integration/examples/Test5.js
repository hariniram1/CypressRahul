
/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My 5th test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       //check visibility 
       cy.get('#displayed-text').should('be.visible');
       cy.get('#hide-textbox').click();
       cy.get('#displayed-text').should('not.be.visible');
       cy.get('#show-textbox').click();
       cy.get('#displayed-text').should('be.visible');
       cy.get('#displayed-text').type('harini');

       cy.get('input[value="radio1"]').click();
       cy.get('input[value="radio1"]').should('be.checked');

       cy.get('input[value="radio2"]').check().should('be.checked');
        

       
   })
            
})