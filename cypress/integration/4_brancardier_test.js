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
        cy.get('[data-testid="dayPicker"]').type('2022-05-26');
    });

    it('worklist can render', () => {
        cy.get('[data-testid="accepter-20220003"]').should("exist");
        cy.get('[data-testid="accepter-20220019"]').should("exist");
        cy.get('[data-testid="accepter-20220021"]').should("exist");
        cy.get('[data-testid="accepter-20220001"]').should("exist");
        cy.get('[data-testid="accepter-20220004"]').should("exist");
    });

    it('brancardier can accept a patient', () => {
        cy.get('[data-testid="accepter-20220003"]').click();
        cy.get('[data-testid="accepter-20220019"]').click();
        cy.get('[data-testid="accepter-20220021"]').click();
        cy.get('[data-testid="accepter-20220001"]').click();
        cy.get('[data-testid="accepter-20220004"]').click();

        cy.get('[data-testid="deposer-20220003"]').should("exist");
        cy.get('[data-testid="deposer-20220019"]').should("exist");
        cy.get('[data-testid="deposer-20220021"]').should("exist");
        cy.get('[data-testid="deposer-20220001"]').should("exist");
        cy.get('[data-testid="deposer-20220004"]').should("exist");
    });

    it('brancardier can dump a patient', () => {
        cy.get('[data-testid="deposer-20220003"]').click();
        cy.get('[data-testid="deposer-20220019"]').click();
        cy.get('[data-testid="deposer-20220021"]').click();
        cy.get('[data-testid="deposer-20220001"]').click();
        cy.get('[data-testid="deposer-20220004"]').click();
    });

    it('Brancardier can logout', () => {
        cy.get('#logout').click();

        cy.get('[data-testid="loginDiv"]').should("exist");
    });
});