/// <reference types="Cypress" />
describe('My 11th Test', function(){

    before(function(){

        cy.fixture('example').then(data=>{
            this.data = data
        })
    })

    it("My Frame demo test case",  function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('input[name="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get('a[href*="shop"]').click()
        // cy.selectProduct('Blackberry');
        // cy.selectProduct('Samsung Note 8');

        this.data.productname.forEach(element => {
            cy.selectProduct(element);
        });
 
    })

})