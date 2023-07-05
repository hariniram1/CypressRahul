class HomePage{

getName(){
    return  cy.get('input[name="name"]:nth-child(2)')
}

getDataBindingName(){
    return  cy.get('input[name="name"]:nth-child(1)')
}

getGender(){
    return cy.get('select')
}

getEnterprenuer(){
    return cy.get('#inlineRadio3')
}

getShop(){
    return cy.get('a[href*="shop"]')
}


}
export default HomePage