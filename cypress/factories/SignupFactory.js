var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  deliver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: "11999999999",
      address: {
        postalcode: "17012205",
        street: "Rua Henrique Savi",
        number: "1444",
        details: "ap 803",
        district: "Vila Nova Cidade Universitária",
        city: "Bauru/SP",
      },
      cnh: "cnh-digital.jpg.jpg",
    };

    return data;
  },
};
