///<reference types="Cypress"/>
const el = {
    registerLoginButton: "//a[@href='/login']",
    logoutButton: "//a[@href='/logout']",
    deleteAccountButton: "//a[@href='/delete_account']",
    assertDeleteAccount:`//h2[@data-qa='account-deleted']`,
    continueButton: `//a[@data-qa='continue-button']`
}

class HomePage{
    clickRegisterLogin(){
        cy.xpath(el.registerLoginButton).click()
    }
    clickLogout(){
        cy.xpath(el.logoutButton).click()
    }
    clickDeleteAccount(){
        cy.xpath(el.deleteAccountButton).click()
    }
    deleteSucess(){
        cy.xpath(el.assertDeleteAccount).should('be.visible')
    }
    returnHomePage(){
        cy.xpath(el.continueButton).click()
    }
    assertHomePage(){
        cy.xpath(el.assertDeleteAccount).should('not.be.visible')
    }
}
export default new HomePage()