describe('Scanner', () => {
    it('Scanner page can render', () => {
        cy.visit('/');
        cy.get('#email').type('scanner01@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();

        cy.get('[data-testid="infiDiv"]').should("exist");
        cy.get('.navbar').should("exist");
        cy.get('#Worklist').should("exist");
        cy.findByRole('heading', {  name: /patients demandés/i}).should("exist");
        cy.findByRole('heading', {  name: /patients arrivés/i}).should("exist");
    });

    it('Scanner can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");

        cy.get('[data-testid="dayPicker"]').click();
        cy.get('[data-testid="dayPicker"]').type('2022-05-26');
    });

    it('Patient list can render', () => {
        cy.get('[data-testid="demander-20220019"]').should("exist");
    });

    it('Scanner can request patients', () => {
        cy.get('[data-testid="demander-20220019"]').click();

        cy.wait(2000)

        cy.get('[data-testid="annuler-20220019"]').should("exist");
    });

    it('Scanner can logout', () => {
        cy.get('#logout').click();

        cy.get('[data-testid="loginDiv"]').should("exist");
    });

});