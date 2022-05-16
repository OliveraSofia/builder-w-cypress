import HomePage from "../Pages/homePage"
import HOMEPAGE from "../Pages/homePage"

describe('Open Page', () => {
    beforeEach(() => {
        cy.visit('https://staging.engineer.ai')
    });

    it('Close Welcome window', () => {

        HomePage.welcomeWindow();
        HomePage.wizzardDot();

    });
  

  
})
  