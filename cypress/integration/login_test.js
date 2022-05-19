describe('login', () => {

    it('Login page can render', () => {
        cy.visit('/');
        cy.get('[data-testid="loginDiv"]').should("exist");
    });

    it('error message render', () => {
        cy.visit('/');
        cy.get('[type="submit"]').click();
        cy.get('.error').should("exist");
        cy.get('#email').type('coucou');
        cy.get('#password').type('coucou');
        cy.get('[type="submit"]').click();
        cy.get('.error').should("exist");
    });

    it('Infirmier can login', () => {
        cy.visit('/');
        cy.get('#email').type('scanner01@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();
        cy.get('[data-testid="infiDiv"]').should("exist");
        cy.get('#logout').click();
    });

    it('Brancardier can login', () => {
        cy.visit('/');
        cy.get('#email').type('bran@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();
        cy.get('[data-testid="branDiv"]').should("exist");
        cy.get('#logout').click();
    });
});