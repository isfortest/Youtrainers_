describe('SingInUsingLinkedIn.cy.js', () => {
    it('visit jetbrains.com', () => {
      cy.visit("https://www.staging.youtrainers.com");
      cy.url().should('eq', 'https://www.staging.youtrainers.com/');
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get("button[class*='linkedIn']").click();
      cy.origin('https://www.linkedin.com', () => {
        cy.get('#username').type('testeur.tester0@gmail.com');
        cy.get('#password').type('Testeur00@');
        cy.get('.btn__primary--large').click();
        cy.get('#oauth__auth-form__submit-btn').click();
      });
    })
})