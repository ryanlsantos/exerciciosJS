// A partir do vetor contido no arquivo data.json e utilizando os métodos de array (map, reduce, filter e find)
// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map
// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - filter
// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos

const data = require("./data.json");

// 1
const ages = data.map(user => {
  if (user.age) {
    return user.age;
  } else {
    return "Não informado!";
  }
});

// 2
const femMaior18 = data.filter(pessoa => {
  return pessoa.gender == "Female" && pessoa.age >= 18;
});

// 3
const cidade = data.find(usercity => {
  return usercity.address.city == "Monroe";
});

// 4
const idadeFiltrada = data
  .map(listaIdade => listaIdade.age * 2)
  .filter(idade => idade <= 50 && idade > 0);

// console.table(ages);
// console.table(femMaior18);
// console.table(cidade);
console.table(idadeFiltrada);
