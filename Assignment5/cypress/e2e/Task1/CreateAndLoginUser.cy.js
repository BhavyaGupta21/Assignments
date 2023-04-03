describe('Registration Form', () => {
    
    it('Create new user and login with same user', () => {
        
        cy.visit("https://ineuron-courses.vercel.app");

        cy.xpath("//nav[@class='navbar-menu-parent']//button[1]", {timeout: 10000}).click();

        cy.contains("New user? Signup").click();

        cy.contains("Sign up", {timeout: 10000}).should("be.disabled");

        cy.get('#name').type("Testing Test");

        cy.get('#email').type("test8@test.test");
        
        cy.get('#password').type("test8@123");

        cy.xpath("//label[text()='Testing']/preceding-sibling::input[@type='checkbox']").click();

        cy.xpath("//input[@type='radio']").first().click();

        cy.get("#state").select("Goa").should('have.value', "Goa");

        cy.get("button[type='submit']", {timeout: 10000}).should("be.enabled").click();

        cy.get('#email1').type("test8@test.test").should("have.value", "test8@test.test");

        cy.get("#password1").type("test8@123", {timeout: 10000}).should("have.value", "test8@123");

        cy.get('.submit-btn').should("be.enabled").click();

        cy.get('.navbar-menu-links > button').should("be.visible", {timeout: 10000});

        cy.get(".welcomeMessage").should("be.visible");

        cy.get('.navbar-menu-links > button').should("be.enabled").click();

        cy.get('.header', {timeout: 10000}).should("be.visible");
    });
});