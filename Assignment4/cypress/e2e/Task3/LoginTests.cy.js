describe('Login functionality test', () => {
    
    it('Empty Username and Password fields', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");
        
        cy.get("button[type='submit']").click();

        cy.get(".errorMessage").should("contain", "Email and Password is required")
    });

    it('Empty Password field', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get("#email1").type("ineuron@ineuron.ai");

        cy.get("button[type='submit']").click();

        cy.get(".errorMessage").should("contain", "Password is required");
    });

    it('Empty Username field', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get("#password1").type("ineuron");

        cy.get("button[type='submit']").click();

        cy.get(".errorMessage").should("contain", "Email is required");
    });

    it('Wrong Username and Wrong Password', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get("#email1").type("ineuron@ieuron.ai");

        cy.get("#password1").type("ieuron");

        cy.get("button[type='submit']").click();

        cy.get(".errorMessage").should("contain", "USER Email Doesn't Exist");
    });
});