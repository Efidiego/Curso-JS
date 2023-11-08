/*
Fernando Diego Assis tem 37 anos, pesa 80kg
tem 1.73 de altua e seu IMC é de 26.729927495071667
Fernando Diego nasceu em 1986
*/

const nome = 'Fernando Diego'
const sobrenome = 'Assis'
const idade = 37;
const peso = 80;
const alturaEmM = 1.73;
let imc; //peso / (altura * altura)

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log (`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log (`${nome} nasceu em ${anoNascimento}.`);