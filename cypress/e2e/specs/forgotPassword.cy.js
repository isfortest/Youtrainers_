describe('forgotPassword.cy.js', () => {
    it('Cas non passant 1 - Should not reset password', () => {
        cy.visit("https://www.staging.youtrainers.com/");
        cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
        cy.get("div[class^=\'mat-dialog-actions\']").find('button').first().click();
        cy.get('#mat-input-3').type('test');
        cy.get('.mat-hint').should('contain', 'Invalid Email');
        cy.get('.mat-dialog-actions').find('button').should('be.disabled');
    })
    it('Cas non passant 2 - Should not reset password',()=>{
        cy.visit("https://www.staging.youtrainers.com/");
        cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
        cy.get("div[class^=\'mat-dialog-actions\']").find('button').first().click();
        cy.get('#mat-input-3').type('test@');
        cy.get('.mat-hint').should('contain', 'Invalid Email');
        cy.get('.mat-dialog-actions').find('button').should('be.disabled');
    })
    it('Cas non passant 3 - Should not reset password',()=>{
        cy.visit("https://www.staging.youtrainers.com/");
        cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
        cy.get("div[class^=\'mat-dialog-actions\']").find('button').first().click();
        cy.get('#mat-input-3').type('test@gmail.');
        cy.get('.mat-hint').should('contain', 'Invalid Email');
        cy.get('.mat-dialog-actions').find('button').should('be.disabled');

    })
    it('Cas passant - Should reset password',()=>{
        cy.visit("https://www.staging.youtrainers.com/");
        cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
        cy.get("div[class^=\'mat-dialog-actions\']").find('button').first().click();
        cy.get('#mat-input-3').type('test@gmail.com');
        cy.get('.mat-dialog-actions').find('button').should('not.be.disabled');
    })
})