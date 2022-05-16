describe('Brancardier', () => {
    it('Brancardier page can render', () => {
        cy.visit('/');
        cy.get('#email').type('bran@admin.com');
        cy.get('#password').type('123');
        cy.get('[type="submit"]').click();

        cy.get('[data-testid="branDiv"]').should("exist");
        cy.get('.navbar').should("exist");
        cy.findByRole('heading', {  name: /demande de transport/i}).should("exist");
        cy.findByRole('heading', {  name: /transport en cours/i}).should("exist");
        cy.findByRole('heading', {  name: /liste de travail/i}).should("exist");
    });

    it('Brancardier can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");
        cy.get('[data-testid="dayPicker"]').click();
        cy.get('[data-testid="dayPicker"]').type('2022-05-17');
    });

    it('worklist can render', () => {
        cy.get('#Bacq').should("exist");
    });

    it('brancardier can accept a patient', () => {
        cy.get('#Cross > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();
        cy.get('#Vandenberg > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();
        cy.get('#Bacq > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();

        cy.get('#Cross > .patient-action > :nth-child(2) > .action > .action-button').should("exist");
        cy.get('#Vandenberg > .patient-action > :nth-child(2) > .action > .action-button').should("exist");
        cy.get('#Bacq > .patient-action > :nth-child(2) > .action > .action-button').should("exist");
    });

    it('brancardier can dump a patient', () => {
        cy.get('#Cross > .patient-action > :nth-child(2) > .action > .action-button').click();
        cy.get('#Vandenberg > .patient-action > :nth-child(2) > .action > .action-button').click();
        cy.get('#Bacq > .patient-action > :nth-child(2) > .action > .action-button').click();
    });

    it('Brancardier can logout', () => {
        cy.get('#logout').click();

        cy.get('[data-testid="loginDiv"]').should("exist");
    });
});