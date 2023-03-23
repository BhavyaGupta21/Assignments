// Task 2 – Login and Logout 
// Open https://ineuron-courses.vercel.app/login

// Enter username as  ineuron@ineuron.ai
// Enter password as ineuron
// Click on login button
// Verify welcome message 
// Note- Message will fade away in 10 seconds

// Click on Logout
// Verify user is logged out

describe('Login And Logout', () => {
    
    it('Verify login and logout functionality', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get("#email1").type("ineuron@ineuron.ai");

        cy.get("#password1").type("ineuron");

        cy.get("button[type='submit']").click();

        cy.get(".home-container").should("be.visible", setTimeout(9000));

        cy.get("div[class='navbar-menu-links'] button").click();

        cy.get(".header").should("contain", "Sign In");

    });
});