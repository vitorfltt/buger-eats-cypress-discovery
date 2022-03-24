describe("home page", () => {
  it("app deve estar online", () => {
    cy.viewport(1440, 900); //Redimensiona o tamanho da janela do cypress
    cy.visit("https://buger-eats.vercel.app");
    cy.get("#page-home main h1").should(
      "have.text",
      "Seja um parceiro entregador pela Buger Eats"
    );
  });
});
