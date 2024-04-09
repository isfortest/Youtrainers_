describe('scheduleAworkshop.cy.js', () => {
    it('should schedule a workshop', () => {
        cy.visit("https://www.youtrainers.com/");
        cy.url().should('eq', 'https://www.youtrainers.com/');
        cy.wait(1000);
        cy.get('button[class$=\'ng-star-inserted\'] span[class=\'mat-button-wrapper\']').click();
        cy.wait(1000);
        cy.get('#mat-input-1').type('testeur.tester01@gmail.com');
        cy.wait(1000);
        cy.get('#mat-input-2').type('Testeur01@');
        cy.wait(2000);
//cy.get('.mat-icon.ng-star-inserted').click()
        cy.get('.mat-dialog-actions').find('button').contains('Sign in').should('not.be.disabled').click();
        cy.wait(2000);
        cy.get('app-header a').find('span').contains('Schedule a workshop').click();
        cy.wait(2000);
        cy.get('.mat-form-field-outline-end.ng-tns-c89-3').first().type('Titre');
        cy.get('#mat-chip-list-input-0').type('java');
        cy.get('#mat-autocomplete-0').find('#mat-option-678 span').contains('JAVA').click();
        cy.get('#mat-radio-2-input').check().should('be.checked').and('have.value', 'ANY_LEVEL').contains('Any level');
    })
})