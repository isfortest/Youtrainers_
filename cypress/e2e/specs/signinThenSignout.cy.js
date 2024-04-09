describe('signinThenSignout.cy.js', () => {
    it('visit jetbrains.com', () => {
      cy.visit("https://www.staging.youtrainers.com/");
      cy.url().should('eq', 'https://www.staging.youtrainers.com/');
      cy.wait(1000);
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.wait(1000);
      cy.get('#mat-input-1').type('testeur.tester0@gmail.com');
      cy.wait(1000);
      cy.get('#mat-input-2').type('Testeur00@');
      cy.wait(2000);
      //cy.get('.mat-icon.ng-star-inserted').click()
      cy.get('.mat-dialog-actions').find('button').contains('Sign in').should('not.be.disabled').click();
      cy.wait(1000);
      cy.get('.mat-primary.mat-toolbar-single-row').find('button').last().click();
      cy.wait(1000);
      cy.get('#mat-menu-panel-0').find('button').contains('Sign out').click();
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').should('contain', 'Sign in');
    })
})