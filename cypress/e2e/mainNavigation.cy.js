describe("Navigation", () => {
  it("it shoulde navigate to homepage", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="about"]').click();
    cy.url().should("include", "/about");
    cy.get("h1").should("have.text", "About");
  });
});
