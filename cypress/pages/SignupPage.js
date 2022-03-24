/// <reference types="Cypress" />

class SignupPage {
  go() {
    cy.visit("/");
    cy.get('a[href="/deliver').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
  }

  fillForm(deliver) {
    cy.get('input[name="fullName"]').type(deliver.name);
    cy.get('input[name="cpf"]').type(deliver.cpf);
    cy.get('input[name="email"]').type(deliver.email);
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);

    cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
    cy.get('input[type=button][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(deliver.address.number);
    cy.get('input[name="address-details"]').type(deliver.address.details);

    cy.get('input[name="address"]').should(
      "have.value",
      deliver.address.street
    );
    cy.get('input[name="district"]').should(
      "have.value",
      deliver.address.district
    );
    cy.get('input[name="city-uf"]').should("have.value", deliver.address.city);

    var nomes = ["Moto", "Bike Elétrica", "Van/Carro"];
    var name = nomes[Math.round(Math.random() * nomes.length - 1)];
    cy.contains(".delivery-method li", name).click();

    cy.get('input[accept^="image"]').attachFile("/images/" + deliver.cnh);
  }

  ValidateMessageButton() {
    cy.get('form button[type="submit"]').should(
      "have.text",
      "Cadastre-se para fazer entregas"
    );
  }

  submit() {
    cy.get('form button[type="submit"]').click();
  }

  modalContentShouldBe() {
    cy.get(".swal2-container .swal2-html-container").should(
      "have.text",
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    );
  }

  alertMessageShouldBe(expectMessage) {
    //cy.get(".alert-error").should("have.text", expectMessage);
    cy.contains(".alert-error", expectMessage).should("be.visible");
  }
}

export default new SignupPage();
