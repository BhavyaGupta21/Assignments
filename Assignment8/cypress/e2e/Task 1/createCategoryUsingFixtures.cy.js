describe('Handle Window Tabs in Cypress', function() {

    beforeEach(function() {
        cy.fixture("courseCategory").then(function(jsonData) { // The data from the file "cypressData" will get stored inside the parameter jsonData
            this.jsonData = jsonData;
        });

    });

    it('Switch Tab in Cypress', function() {
        
        cy.visit(this.jsonData.url);
        cy.login(this.jsonData.username, this.jsonData.password);

        cy.contains("Manage", {timeout: 20000}).realHover();

        cy.wait(3000);

        cy.contains("Manage Categories").invoke("removeAttr", "target").click({force: true});

        cy.window().then(function(win) {

            cy.contains("Add New Category ").click();

            cy.stub(win, "prompt").returns(this.jsonData.category);
        });

        cy.contains(this.jsonData.category).should("be.visible");

        cy.logout();

    });
});