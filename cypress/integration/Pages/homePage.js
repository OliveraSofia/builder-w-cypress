export const HOMEPAGE = {
    BTN_CHOOSE_BASE : '.builderNowCta',
    WIZZARD_DOT : '.wizardDot',
    WELCOME_WIZZARD_MESSAGE_1 : 'h3 > :nth-child(1)',
    WELCOME_WIZZARD_MESSAGE_2 : 'h3 > :nth-child(2)',
    SEARCH_BAR : '.searchBar'

};


class HomePage {

    welcomeWindow() {
        cy.get(HOMEPAGE.BTN_CHOOSE_BASE).click()

    };

    wizzardDot() {
        cy.wait(2000)
        cy.get(HOMEPAGE.WIZZARD_DOT)
          .should('be.visible')
        cy.get(HOMEPAGE.WELCOME_WIZZARD_MESSAGE_1)
          .should('be.visible')
        cy.get(HOMEPAGE.WELCOME_WIZZARD_MESSAGE_2)
          .should('be.visible')
        cy.get(HOMEPAGE.SEARCH_BAR)
          .should('be.visible')
    };

    
 }

    
export default new HomePage;