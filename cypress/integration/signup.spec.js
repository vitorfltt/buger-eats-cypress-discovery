import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";
import SignupPage from "../pages/SignupPage";

describe("Signup", () => {
  // beforeEach(function () {
  //   cy.fixture("deliver").then((d) => {
  //     this.deliver = d;
  //   });
  // });

  it("User should be deliver", function () {
    var deliver = signupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.ValidateMessageButton();
    signup.submit();
    signup.modalContentShouldBe();
  });

  it("Incorrect document", function () {
    var deliver = signupFactory.deliver();
    deliver.cpf = "0000000aa";

    signup.go();
    signup.fillForm(deliver);
    signup.ValidateMessageButton();
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("Incorrect email", function () {
    var deliver = signupFactory.deliver();
    deliver.email = "vitor.fltt.com";

    signup.go();
    signup.fillForm(deliver);
    signup.ValidateMessageButton();
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  context("Require fields", () => {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(() => {
      SignupPage.go();
      SignupPage.submit();
    });

    messages.forEach((msg) => {
      it(`${msg.field} is required`, () => {
        SignupPage.alertMessageShouldBe(msg.output);
      });
    });
  });
});
