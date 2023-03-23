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