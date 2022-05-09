describe('brancardier', () => {
    it('brancardier can do everything', () => {
        //check login
        cy.visit('http://localhost:3001/');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByText(/bad user or password/i);
        //login
        cy.findByRole('textbox', {  name: /email/i}).type('bran@admin.com');
        cy.findByLabelText(/password/i).type('123');
        cy.findByRole('button', {  name: /login/i}).click();

        //logout
        cy.findByRole('button', {  name: /logout/i}).click();
    });
});