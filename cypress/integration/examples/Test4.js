
/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My fourth test case",  function(){
       //handling dynamic dropdowns
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('select').select('option1').should('have.value','option1');
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
               if ($el.text() === 'India'){
                cy.wrap($el).click();
               }
               
        })
        cy.get('#autocomplete').should('have.value','India');
        

       
   })
            
})