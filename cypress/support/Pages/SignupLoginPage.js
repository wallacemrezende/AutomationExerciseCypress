///<reference types="Cypress"/>
const el = {
    nameRegister: `//input[@data-qa='signup-name']`,
    registerEmail: `//input[@data-qa='signup-email']`,
    registerConfirmButton: `//button[@data-qa='signup-button']`,
    emailLogin: `[data-qa='login-email']`,
    passwordLogin: `[data-qa="login-password"]`,
    loginButton: `[data-qa="login-button"]`,
    radioMen: `#id_gender1`,
    radioWomen: `#id_gender2`,
    passwordField: `#password`,
    dayField: `#days`,
    monthField: `#months`,
    yearField: `#years`,
    checkboxNewsletter: `//label[contains (text (), 'Sign up for our newsletter!')]`,
    checkboxSpecialOffers: `//label[contains (text (), 'Receive special offers from our partners!')]`,
    firstNameField: `#first_name`,
    lastNameField: `#last_name`,
    adressOneField: `#address1`,
    adressAlternativeField: `#address2`,
    countryList: `#country`,
    stateFiled: `#state`,
    cityField: `#city`,
    zipCodeField: `#zipcode`,
    mobileNumberField: `#mobile_number`,
    createAccountButton: `[data-qa= create-account]`,
    assertCreateAccount: `//h2[@data-qa='account-created']`,
    continueButton: `[data-qa= continue-button]`
}

class SignupLoginPage{
    nameText(){
        cy.xpath(el.nameRegister).type('Teste User')
    }
    emailText(){
        cy.xpath(el.registerEmail).type('usertest@usertest.com')
    }
    registerConfirm(){
        cy.xpath(el.registerConfirmButton).click()
    }
    loginUser(){
        cy.get(el.emailLogin).type('usertest@usertest.com')
    }
    passwordUser(){
        cy.get(el.passwordLogin).type('teste@ste123')
    }
    enterUser(){
        cy.get(el.loginButton).click()
    }
    chooseMen(){
        cy.get(el.radioMen).click()
    }
    newPassword(){
        cy.get(el.passwordField).type('teste@ste123')
    }
    selectDay(){
        cy.get(el.dayField)
            .select('20')
            .should('have.value', '20')
    }
    selectMonth(){
        cy.get(el.monthField)
            .select('January')
            .should('have.value', '1')
    }
    selectYear(){
        cy.get(el.yearField)
            .select('1993')
            .should('have.value', '1993')
    }
    clickCheckBoxNews(){
        cy.xpath(el.checkboxNewsletter).click()
    }
    clickCheckBoxSpecial(){
        cy.xpath(el.checkboxSpecialOffers).click()
    }
    insertName(){
        cy.get(el.firstNameField).type('Wallace')
    }
    insertLastName(){
        cy.get(el.lastNameField).type('Wallace')
    }
    insertAddress(){
        cy.get(el.adressOneField).type('Rua Treze, 12 - Mundo')
    }
    selectCountry(){
        cy.get(el.countryList)
            .select('United States')
            .should('have.value', 'United States')
    }
    insertState(){
        cy.get(el.stateFiled).type('Florida')
    }
    insertCity(){
        cy.get(el.cityField).type('Miami')
    }
    insertZipCode(){
        cy.get(el.zipCodeField).type('33109')
    }
    insertMobileNumber(){
        cy.get(el.mobileNumberField).type('+5531996723985')
    }
    confirmAccount(){
        cy.get(el.createAccountButton).click()
    }
    createAccountSucess(){
        cy.xpath(el.assertCreateAccount).should('be.visible')
    }
    continueButton(){
        cy.get(el.continueButton).click()
    }

}
export default new SignupLoginPage()