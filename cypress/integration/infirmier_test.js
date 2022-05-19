describe('Infirmier', () => {
    it('Infirmier page can render', () => {
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

    it('Infirmier can change date', () => {
        cy.get('[data-testid="dayPicker"]').should("exist");

        cy.get('[data-testid="dayPicker"]').click();
        cy.get('[data-testid="dayPicker"]').type('2022-05-17');
    });

    it('Patient list can render', () => {
        cy.get('.navbar > div > button').click();

        cy.get('#Cross').should("exist");
        cy.get('#Cross > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').should("exist");
    });

    it('Infirmier can request patients', () => {
        cy.get('#Cross > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();
        cy.get('#Vandenberg > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();
        cy.get('#Bacq > .patient-action > :nth-child(2) > :nth-child(1) > .action > .action-button').click();

        cy.get('#Cross > .patient-action > :nth-child(2) > .action > div').should("exist");
        cy.get('#Vandenberg > .patient-action > :nth-child(2) > .action > div').should("exist");
        cy.get('#Bacq > .patient-action > :nth-child(2) > .action > div').should("exist");
    });

    it('Infirmier can logout', () => {
        cy.get('#logout').click();

        cy.get('[data-testid="loginDiv"]').should("exist");
    });

});