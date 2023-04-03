describe('Registration Form', () => {
    
    it('Create new user and login with same user', () => {
        
        cy.visit("https://ineuron-courses.vercel.app");

        cy.xpath("//nav[@class='navbar-menu-parent']//button[1]", {timeout: 10000}).click();

        cy.xpath("//a[normalize-space()='New user? Signup']").click();

        cy.xpath("//button[normalize-space()='Sign up']", {timeout: 10000}).should("be.disabled");

        cy.xpath("//input[@id='name']").type("Testing Test");

        cy.xpath("//input[@id='email']").type("test17@test.test");
        
        cy.xpath("//input[@id='password']").type("test17@123");

        cy.xpath("//label[text()='Testing']/preceding-sibling::input[@type='checkbox']").click();

        cy.xpath("//input[@type='radio']").first().click();

        cy.xpath("//select[@id='state']").select("Goa").should('have.value', "Goa");

        cy.xpath("//button[normalize-space()='Sign up']", {timeout: 10000}).should("be.enabled").click();

        cy.xpath("(//input[@id='email1'])[1]").type("test17@test.test").should("have.value", "test17@test.test");

        cy.xpath("(//input[@id='password1'])[1]").type("test17@123", {timeout: 10000}).should("have.value", "test17@123");

        cy.xpath("//button[normalize-space()='Sign in']").should("be.enabled").click();

        cy.xpath("//button[normalize-space()='Sign out']").should("be.visible", {timeout: 10000});

        // cy.xpath("//h4[normalize-space()='Welcome iNeuron to iNeuron Courses']", {timeout: 7000}).should("be.visible", {timeout: 7000}); // (//h4[normalize-space()='Welcome iNeuron to iNeuron Courses'])[1]
        cy.get(".welcomeMessage").should("be.visible"); // This welcome message is not workign using the "xpath", I tried it using both the relative and index xpath, but assertion is getting failed and so I used "cssSelector", in place of it

        cy.xpath("//button[normalize-space()='Sign out']").should("be.enabled").click();

        cy.xpath("//h2[normalize-space()='Sign In']", {timeout: 10000}).should("be.visible");
    });
});