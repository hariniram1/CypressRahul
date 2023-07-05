
import HomePage from "../pageObjects/Homepage"

describe('TestSuite1',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })
    it('TestCase1',function(){

        const homePage = new HomePage();


        cy.visit(Cypress.env('url')+"angularpractice/")
       
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getDataBindingName().should('have.value',this.data.name)
        homePage.getName().should('have.attr','minlength',2)
        homePage.getEnterprenuer().should('be.disabled')
        homePage.getShop().click()
        //cy.selectProduct('Blackberry');
        //cy.selectProduct('Samsung Note 8');

        this.data.productname.forEach(element => {
            cy.selectProduct(element);
        });

        cy.get('.nav-item.active a').click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el,index, $list)=>{
            cy.log(true)
           const text = $el.text();
           var res = text.split(" ");
           res = res[1].trim()
           cy.log(res)
            sum = Number(sum) + Number(res)
            cy.log(sum)
         }).then(function(){
         cy.log(sum)
        })
       
        cy.get('h3 strong').then(function(element){
            const amount =element.text();
           var res = amount.split(" ");
           var total = res[1].trim()
           expect(Number(total)).to.equal(sum)
        })

        // cy.get('button.btn.btn-success').click()

        // cy.get('#country').type('ind');
        // //cy.wait(6000)
        // cy.get('.suggestions ul:nth-child(1)').click();

        // cy.get('label[for="checkbox2"]').click({force:true})
        // cy.get('input[value="Purchase"]').click()
        // //cy.get('.alert').should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).') // thi is also correct
        // cy.get('.alert').then(function(element){
        //     const actualText= element.text();
        //     expect(actualText.includes("Success")).to.be.true
        // })

       
    


    
    })

})