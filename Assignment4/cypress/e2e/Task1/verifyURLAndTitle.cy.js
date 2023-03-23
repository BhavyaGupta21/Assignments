describe('Verify URL and Title Test', () => {
    
    it('Verify title and URL of the application', () => {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.title().should("contain", "Courses");

        cy.url().should("contain", "login");
    });
});