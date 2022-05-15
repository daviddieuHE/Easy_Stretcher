import "@testing-library/cypress/add-commands"

Cypress.Commands.add('loginInf', () => {
    cy.visit('/')
    cy.get('#email').type('scanner01@admin.com');
    cy.get('#password').type('123');
    cy.get('[type="submit"]').click();
})