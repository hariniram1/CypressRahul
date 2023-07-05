
/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My 6th test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
       // cypress auto handles alerts and pop-ups 
       
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        cy.on('window:alert', str =>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
       
        // remove target attribute and opens in same tab
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        //cy.url().should('include','qaclickacademy') 
        cy.go('back');
   })
            
})