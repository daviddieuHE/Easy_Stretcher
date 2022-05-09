import { INT24 } from "mysql/lib/protocol/constants/types"

describe('login', () => {
    it('user can login', () => {
        //login
        cy.visit('http://localhost:3001/');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('textbox', {  name: /email/i}).type('inf@admin.com');
        cy.findByLabelText(/password/i).type('123');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('button', {  name: /logout/i}).click();
        cy.findByRole('textbox', {  name: /email/i}).type('bran@admin.com');
        cy.findByLabelText(/password/i).type('123');
        cy.findByRole('button', {  name: /login/i}).click();
        cy.findByRole('button', {  name: /logout/i}).click();
    });
});