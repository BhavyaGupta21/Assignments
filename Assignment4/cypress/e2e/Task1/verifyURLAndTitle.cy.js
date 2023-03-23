// Task 1 – Verify URL and title
// Open https://ineuron-courses.vercel.app/login

// Verify title contains Courses 
// Verify url contains login

describe('Verify URL and Title Test', () => {
    
    it('Verify title and URL of the application', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.title().should("contain", "Courses");

        cy.url().should("contain", "login");
    });
});