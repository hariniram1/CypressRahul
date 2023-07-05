
/// <reference types="Cypress" />
describe('My 9th Test', function(){

    it("My 8th test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        // cy.get('#opentab').invoke('attr', 'href').then(value => {
        //     const url = value;
        //     cy.log(value);
        //     cy.visit(url);
        //   });

        //  cy.get('#opentab').invoke('prop', 'href').then(value => {
        //     cy.log(value);
        //     cy.visit(value);
        //  })

        
        cy.get('#opentab').then(value=>{
            const url = value.prop('href');
            cy.log(url);
            cy.visit(url)

            cy.origin(url, ()=>{
            cy.get('div.sub-menu-bar a[href="about.html"]').click();
        })
        })

        



         })
      
   })
            
