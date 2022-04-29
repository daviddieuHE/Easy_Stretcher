describe('infirmier', () => {
    it('infirmier can do everything', () => {
        //check login
        cy.visit('http://localhost:3001/');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByText(/details don't match/i);
        //login
        cy.findByRole('textbox', {  name: /email/i}).type('infirmier@admin.com');
        cy.findByLabelText(/password/i).type('infirmier123');
        cy.findByRole('button', {  name: /login/i}).click();

        //logout
        cy.findByRole('button', {  name: /logout/i}).click();
    });
});