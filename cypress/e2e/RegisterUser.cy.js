///<reference types="Cypress"/>

import HomePage from "../support/Pages/HomePage"
import SignupLoginPage from "../support/Pages/SignupLoginPage"

describe('Should be create a new account and delete', () => {
    beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    cy.viewport(1300, 800)
    })

    it('Create Account', () => {
        HomePage.clickRegisterLogin()
        SignupLoginPage.nameText()
        SignupLoginPage.emailText()
        SignupLoginPage.registerConfirm()
        SignupLoginPage.chooseMen()
        SignupLoginPage.newPassword()
        SignupLoginPage.selectDay()
        SignupLoginPage.selectMonth()
        SignupLoginPage.selectYear()
        SignupLoginPage.clickCheckBoxNews()
        SignupLoginPage.clickCheckBoxSpecial()
        SignupLoginPage.insertName()
        SignupLoginPage.insertLastName()
        SignupLoginPage.insertAddress()
        SignupLoginPage.selectCountry()
        SignupLoginPage.insertState()
        SignupLoginPage.insertCity()
        SignupLoginPage.insertZipCode()
        SignupLoginPage.insertMobileNumber()
        SignupLoginPage.confirmAccount()
        SignupLoginPage.createAccountSucess()
        SignupLoginPage.continueButton()          
    })

    it('Delete a new account', () =>{     
        HomePage.clickRegisterLogin()
        SignupLoginPage.loginUser()
        SignupLoginPage.passwordUser()
        SignupLoginPage.enterUser()
        HomePage.clickDeleteAccount()
        HomePage.deleteSucess()
        HomePage.returnHomePage()

    })
})

