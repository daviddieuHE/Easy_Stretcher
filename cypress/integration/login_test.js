describe('login', () => {
<<<<<<< Updated upstream
    it('user can login', () => {
        //login
        cy.visit('http://localhost:3001/');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('textbox', {  name: /email/i}).type('infirmier@admin.com');
        cy.findByLabelText(/password/i).type('infirmier123');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('button', {  name: /logout/i}).click();
        cy.findByRole('textbox', {  name: /email/i}).type('brancardier@admin.com');
        cy.findByLabelText(/password/i).type('brancardier123');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('button', {  name: /logout/i}).click();
=======
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
>>>>>>> Stashed changes
    });
});