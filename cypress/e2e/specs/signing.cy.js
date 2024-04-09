describe('signing.cy.js', () => {
    it('should not signing - cas non passant 1', () => {
      cy.visit("https://www.staging.youtrainers.com/");
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get('#mat-input-1').type('test');
      cy.get('#mat-hint-1').should('contain', 'Invalid Email');
      cy.get('#mat-input-2').type('test');
      cy.get('.mat-icon.ng-star-inserted').click();
      cy.get('.mat-dialog-actions').find('button').should('be.disabled');
    })
  it('should not signing - cas non passant 2', () => {
    cy.visit("https://www.staging.youtrainers.com/");
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('#mat-input-1').type('test@');
    cy.get('#mat-hint-1').should('contain', 'Invalid Email');
    cy.get('#mat-input-2').type('test');
    cy.get('.mat-icon.ng-star-inserted').click();
    cy.get('.mat-dialog-actions').find('button').should('be.disabled');
  })
  it('should not signing - cas non passant 3',()=>{
    cy.visit("https://www.staging.youtrainers.com/");
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('#mat-input-1').type('test@gmail.');
    cy.get('#mat-hint-2').should('contain', 'Invalid Email');
    cy.get('#mat-input-2').type('test');
    cy.get('.mat-icon.ng-star-inserted').click();
    cy.get('.mat-dialog-actions').find('button').should('be.disabled');

  })
  it('should signing - cas passant',()=>{
    cy.visit("https://www.staging.youtrainers.com/");
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('#mat-input-1').type('testeur.tester0@gmail.com');
    cy.get('#mat-input-2').type('Testeur00@');
    cy.get('.mat-icon.ng-star-inserted').click();
    cy.get('.mat-dialog-actions').find('button').should('not.be.disabled');
  })
})