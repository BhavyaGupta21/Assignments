describe('Create Course - Delete Course', function() {

    beforeEach(function() {
        cy.fixture("createAndDeleteCourseWithFixtures").then(function(jsonData) {
            this.jsonData = jsonData;
        });
    });
    
    it('Create Course', function() {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get('#email1').type(this.jsonData.username).should("have.value", this.jsonData.username);

        cy.get("#password1").type(this.jsonData.password, {timeout: 10000}).should("have.value", this.jsonData.password);

        cy.get('.submit-btn').should("be.enabled").click();

        cy.contains("Manage", {timeout: 20000}).realHover();

        cy.wait(3000);

        cy.contains("Manage Courses").click();

        cy.get(".action-btn.delete-btn").should('have.length', 1);

        cy.contains("Add New Course").click({force: true}); // If we use this here, it will throw a cypress error saying that it is covered with another element as we have mouse hover over "Manage" button and dropdown will be still present there and hence we will have to use "force: true"

        cy.get("button[class='action-btn']").click();

        cy.get(".errorMessage", {timeout: 7000}).should("have.text", this.jsonData.errorMessage);

        // To upload a file, we have to install a package and add the custom command to support file
        // Whatever file we need to upload, we have to keep it under the fixture folder
        cy.get("#thumbnail").attachFile("testing-trends-world-quality-report.jpg");

        cy.get("#name").type(this.jsonData.courseName).should("have.value", this.jsonData.courseName);

        cy.get("#description").type(this.jsonData.courseDescription).should("have.value", this.jsonData.courseDescription);

        cy.get("#instructorNameId").type(this.jsonData.instructor, {delay: 1000});

        // cy.xpath("//div[@class='intructorsList']")
        // .each(function(ele) {
            
        //     cy.log(ele.text());

        //     if(ele.text().includes("Ruhi")) {
        //         cy.wrap(ele).click();
        //     }
        // });

        cy.get("#price").type(this.jsonData.price);

        cy.xpath("//input[@name='startDate']").click();

        cy.xpath("//div[@role='option']").contains(this.jsonData.startDate).click();

        cy.xpath("//input[@name='endDate']").click();

        cy.xpath("//div[@role='option']").contains(this.jsonData.endDate).click();

        cy.get("button[class='menu-btn'] div").click();

        cy.xpath("//div[@class='menu-items']/button")
        .each(function(ele) {
            
            cy.log(ele.text());

            if(ele.text().includes(this.jsonData.category)) {
                cy.wrap(ele).click();
            }
        });

        cy.get("button[class='action-btn']").click();

        cy.get(".action-btn.delete-btn").should('have.length', 2);

    });

    it('Delete Course ', function() {
        
        cy.visit("https://ineuron-courses.vercel.app/login");

        cy.get('#email1').type(this.jsonData.username).should("have.value", this.jsonData.username);

        cy.get("#password1").type(this.jsonData.password, {timeout: 10000}).should("have.value", this.jsonData.password );

        cy.get('.submit-btn').should("be.enabled").click();

        cy.contains("Manage", {timeout: 20000}).realHover();

        cy.wait(3000);

        cy.contains("Manage Courses").click();

        cy.get(".action-btn.delete-btn").should('have.length', 2);

        cy.xpath("//table//tr/td[2][text()='Testing']/parent::tr/td[11]/button").click();

        cy.get(".action-btn.delete-btn").should('have.length', 1);
    });
});

// If we have any outside plugin or command, it won't wait for 4 sec that is the standard wait time in Cypress and here we have to use Timeout specifically.