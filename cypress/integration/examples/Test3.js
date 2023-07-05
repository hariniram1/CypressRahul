/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My second test case",  function(){
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').as('checkbox1');
        cy.get('@checkbox1').check().should('be.checked').and('have.value','option1');
        cy.get('@checkbox1').uncheck().should('not.be.checked')
        //select multiple checkboxes
        cy.get('input[type="checkbox"]').check(); //checks all sheckboxes
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('input[type="checkbox"]').check(['option1','option3']); //check multiple options

    })
    
    })  