<<<<<<< Updated upstream
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
=======
describe('Infirmier', () => {
    it('Infirmier page can render', () => {
        cy.visit('/');
        cy.get('#email').type('scanner01@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();
        cy.get('[data-testid="infiDiv"]').should("exist");
    });
>>>>>>> Stashed changes

    it('Infirmier can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");
        cy.get('[data-testid="dayPicker"]').click();
    });
});