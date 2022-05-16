describe('Infirmier', () => {
    it('Infirmier page can render', () => {
        cy.visit('/');
        cy.get('#email').type('scanner01@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();
        cy.get('[data-testid="infiDiv"]').should("exist");
    });

    it('Infirmier can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");
        cy.get('[data-testid="dayPicker"]').click();
    });
});