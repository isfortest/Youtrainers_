describe('testUrl.cy.js', () => {
    it('visit jetbrains.com', () => {
      //cy.visit('https://www.youtrainers.com/')
      cy.visit("https://www.staging.youtrainers.com/");
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get('#mat-input-1').type('testeur.tester0@gmail.com');
      cy.get('#mat-input-2').type('Testeur00@');
      cy.get('.mat-icon.ng-star-inserted').click();
      cy.get('.mat-dialog-actions').find('button').should('not.be.disabled');
    })
})