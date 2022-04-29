import { INT24 } from "mysql/lib/protocol/constants/types"

describe('login', () => {
    it('user can login', () => {
        //login
        cy.visit('http://localhost:3001/');
        cy.findByRole('textbox', {  name: /email/i}).type('infirmier@admin.com');
        cy.findByLabelText(/password/i).type('infirmier123');
        cy.findByRole('button', {  name: /login/i}).click();
    });
});