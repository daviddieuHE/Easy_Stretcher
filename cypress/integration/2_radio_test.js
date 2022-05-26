describe('Radio', () => {
    it('Radio page can render', () => {
        cy.visit('/');
        cy.get('#email').type('radio01@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();

        cy.get('[data-testid="infiDiv"]').should("exist");
        cy.get('.navbar').should("exist");
        cy.get('#Worklist').should("exist");
        cy.findByRole('heading', {  name: /patients demandés/i}).should("exist");
        cy.findByRole('heading', {  name: /patients arrivés/i}).should("exist");
    });

    it('Radio can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");

        cy.get('[data-testid="dayPicker"]').click();
        cy.get('[data-testid="dayPicker"]').type('2022-05-26');
    });

    it('Patient list can render', () => {
        cy.get('.navbar > div > button').click();

        cy.get('#Cross').should("exist");
        cy.get('#Cross > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').should("exist");
    });

    it('Radio can reset patient list', () => {
        cy.get('.navbar > div > button').should("exist");

        cy.get('.navbar > div > button').click();
    });

    it('Radio can request patients', () => {
        cy.get('[data-testid="demander-20220003"]').click();
        cy.get('[data-testid="demander-20220021"]').click();
        cy.get('[data-testid="demander-20220001"]').click();
        cy.get('[data-testid="demander-20220002"]').click();
        cy.get('[data-testid="demander-20220004"]').click();

        cy.get('[data-testid="annuler-20220003"]').should("exist");
        cy.get('[data-testid="annuler-20220021"]').should("exist");
        cy.get('[data-testid="annuler-20220001"]').should("exist");
        cy.get('[data-testid="annuler-20220002"]').should("exist");
        cy.get('[data-testid="annuler-20220004"]').should("exist");
    });

    it('Radio can cancel patients', () => {
        cy.get('[data-testid="annuler-20220002"]').click();

        cy.wait(500)

        cy.get('[data-testid="demander-20220002"]').should("exist");
    });

    it('Radio can logout', () => {
        cy.get('#logout').click();

        cy.get('[data-testid="loginDiv"]').should("exist");
    });

});