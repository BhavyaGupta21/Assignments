const testValueFixture = [

    {
        "name": "user1",
        "context": "1"
    },
    {
        "name": "user2",
        "context": "2"
    },
    {
        "name": "user3",
        "context": "3"
    },
    {
        "name": "user4",
        "context": "4"
    },
    {
        "name": "user5",
        "context": "5"
    }
];

describe('Create users', function() {
    
    testValueFixture.forEach(function(fixtureData) {

        describe(fixtureData.context, function() {
            
            before(function() {

                cy.fixture(fixtureData.name).then(function(testData) {

                    this.testData = testData;
                });
            });

            it('Create user', function() {
                
                cy.visit("https://ineuron-courses.vercel.app/");

                cy.contains("Log in").click();

                cy.contains("New user? Signup").click();

                cy.get("#name").type(this.testData.name);

                cy.get("#email").type(this.testData.email);

                cy.get("#password").type(this.testData.password);

                cy.xpath("//label[text()='Testing']/preceding-sibling::input[@type='checkbox']").click();

                cy.xpath("//label[normalize-space()='" + this.testData.gender + "']/preceding::input[@type='radio'][1]").click();

                cy.get("#state").select(this.testData.state).should('have.value', this.testData.state);

                cy.get("button[type='submit']", {timeout: 10000}).should("be.enabled").click();

                cy.wait(5000);

                cy.loginUser(this.testData.email, this.testData.password);

                cy.logout();

                cy.contains("New user? Signup").should("be.visible");

                
            });
        });
    })
});