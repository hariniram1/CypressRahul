/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';


describe('My 10th Test', function(){

    it("My Frame demo test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.frameLoaded('#courses-iframe').then(()=>{

        cy.iframe().find('a[href="mentorship"]').eq(0).click();
        cy.wait(2000)
         cy.iframe().find("h1[class*='pricing-title']").should('be.visible').should('have.length',2)

    })

    })

})