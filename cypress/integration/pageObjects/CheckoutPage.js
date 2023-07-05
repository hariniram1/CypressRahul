class CheckoutPage{

    getCheckoutBox(){
        return cy.get('a[class="nav-link btn btn-primary"]')
    }

    getCheckOutButton(){
        return cy.get('button.btn.btn-success')
    }

    Getlocation(){
        return cy.get('button.btn.btn-success')
    }

    GetCheckBox(){
        return cy.get('label[for="checkbox2"]')
    }

    getPurchaseButton(){
        return cy.get('input[value="Purchase"]')
    }

}
export default CheckoutPage