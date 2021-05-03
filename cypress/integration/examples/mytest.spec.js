describe("Hello", function () {

    beforeEach(function () {
        cy.visit("https://www.google.com/")
    })

    it('Hello', function () {
        cy.wait(5000);
    })
})