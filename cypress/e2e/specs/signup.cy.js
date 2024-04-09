describe('signup.cy.js', () => {
    it('should not signup - cas non passant 1', () => {
      cy.visit("https://www.staging.youtrainers.com");
      cy.url().should('eq', 'https://www.staging.youtrainers.com/');
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get('span[class=\'inscription-link\']').click();
      cy.get('#mat-input-3').type('test');
      cy.get('#mat-input-4').type('test');
      cy.get('#mat-hint-2').should('contain', 'Invalid Email');
      cy.get('#mat-input-5').type('test');
      cy.get('#mat-hint-3').should('contain', 'Invalid password');
      cy.get('.mat-icon.ng-star-inserted').click();
      cy.get('#mat-hint-1').should('contain', 'The password must be');
      cy.get('span[class=\'mat-checkbox-inner-container\']').click();
      cy.get('.mat-dialog-actions.dialog-actions').find('button').should('be.disabled');
    })
    it('should not signup - cas non passant 2',()=>{
      cy.visit("https://www.staging.youtrainers.com");
      cy.url().should('eq', 'https://www.staging.youtrainers.com/');
      cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
      cy.get('span[class=\'inscription-link\']').click();
      cy.get('#mat-input-3').type('testname');
      cy.get('#mat-input-4').type('test@');
      cy.get('#mat-hint-2').should('contain', 'Invalid Email');
      cy.get('#mat-input-5').type('testtest');
      cy.get('#mat-hint-3').should('contain', 'Invalid password');
      cy.get('.mat-icon.ng-star-inserted').click();
      cy.get('#mat-hint-1').should('contain', 'The password must be');
      cy.get('span[class=\'mat-checkbox-inner-container\']').click();
      cy.get('.mat-dialog-actions.dialog-actions').find('button').should('be.disabled');
    })
  it('should not signup - cas non passant 3',()=>{
    cy.visit("https://www.staging.youtrainers.com");
    cy.url().should('eq', 'https://www.staging.youtrainers.com/');
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('span[class=\'inscription-link\']').click();
    cy.get('#mat-input-3').type('testname');
    cy.get('#mat-input-4').type('test@@gmail.com');
    cy.get('#mat-hint-2').should('contain', 'Invalid Email');
    cy.get('#mat-input-5').type('Testtest');
    cy.get('#mat-hint-3').should('contain', 'Invalid password');
    cy.get('.mat-icon.ng-star-inserted').click();
    cy.get('#mat-hint-1').should('contain', 'The password must be');
    cy.get('span[class=\'mat-checkbox-inner-container\']').click();
    cy.get('.mat-dialog-actions.dialog-actions').find('button').should('be.disabled');
  })
  it('should not signup - cas non passant 4',()=>{
    cy.visit("https://www.staging.youtrainers.com");
    cy.url().should('eq', 'https://www.staging.youtrainers.com/');
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('span[class=\'inscription-link\']').click();
    cy.get('#mat-input-3').type('testname');
    cy.get('#mat-input-4').type('test@gmail.com');
    cy.get('#mat-input-5').type('Testtest0');
    cy.get('.mat-icon.ng-star-inserted').click();
//cy.get('span[class=\'mat-checkbox-inner-container\']').click()
    cy.get('.mat-dialog-actions.dialog-actions').find('button').should('be.disabled');
  })
  it('should signup - cas passant',()=>{
    cy.visit("https://www.staging.youtrainers.com");
    cy.url().should('eq', 'https://www.staging.youtrainers.com/');
    cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
    cy.get('span[class=\'inscription-link\']').click();
    cy.get('#mat-input-3').type('Ronald');
    cy.get('#mat-input-4').type('ronal.maxim@gmail.com');
    cy.get('#mat-input-5').type('Testeur22');
    cy.wait(2000);
    cy.get('.mat-icon.ng-star-inserted').click();
    cy.get('span[class=\'mat-checkbox-inner-container\']').click();
    cy.get('.mat-dialog-actions.dialog-actions').find('button').should('not.be.disabled').click();
    cy.get('.mat-simple-snackbar.ng-star-inserted').find('span').contains('An email has been sent');
    cy.get('.mat-simple-snackbar.ng-star-inserted').find('button').click();
  })
})