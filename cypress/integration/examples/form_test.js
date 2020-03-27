describe("Testing our user form", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/pizza");
    })
    it("Add test to input and submit form", function () {
        cy.get('input[name="name"]')
            .type("Michael")
            .should("have.value", "Michael");
        cy.get('textarea[name="special"]')
            .type("No mushrooms please, I am allergic")
            .should("have.value", "No mushrooms please, I am allergic");
        cy.get('[type="radio"]')
            .check()
            .should("have.value", "on");
        // cy.get('input[name="gluten-free"]')
        // .check()
        // .should("have.value", true);
        cy.get("[type='submit']")
            .click();
    });
});