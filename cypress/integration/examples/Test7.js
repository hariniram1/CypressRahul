
/// <reference types="Cypress" />
describe('My second Test', function(){

    it("My 7th test case",  function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      
        cy.get('table[name="courses"]').find('tr td:nth-child(2)').each(($el, index, $list)=>{
                if ($el.text().includes("Python")){
                    cy.log('true');
                  const priceText = $el.next().text();
                  cy.log(priceText)
                //    then(function(price){
                //        const pricetext = price.text()
                    expect(priceText).to.equal('25');
                   
                }
        
        })


        cy.get('table[name="courses"]').find('tr td:nth-child(2)').each(($el, index, $list)=>{
            if ($el.text().includes("effective")){
                cy.log('true');
               cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                const priceText = price.text();
                expect(priceText).to.equal('0');

               })
             
               
               
            }
    
    })
   })
            
})