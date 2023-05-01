// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", function(uname, pass) {

    cy.xpath("(//input[@id='email1'])[1]").type(uname);

    cy.get("#password1").type(pass, {timeout: 10000});

    cy.get('.submit-btn').click();

    cy.get('.navbar-menu-links > button', {timeout: 10000}).should("be.visible");
});

Cypress.Commands.add("logout", function() {

    cy.get("div[class='navbar-menu-links'] button").click();
});