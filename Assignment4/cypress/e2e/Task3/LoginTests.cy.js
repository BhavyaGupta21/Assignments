// Task 3- Write 4 test in same suite for verifying error message

// Test 1- Do not enter username and password and click on login button
// Verify error message should contains “Email and Password is required”

// Test 2- Enter username and do not enter password and click on login button
// Verify error message should contains “Password is required”

// Test 3- Enter password and do not enter username and click on login button
// Verify error message should contains “Email is required”

// Test 4- Enter wrong username and wrong password and click on login button
// Verify error message should contains “USER Email Doesn't Exist”

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