/*
Primitivos -  string, number, booleans, undefined,
null (bigint, symbol) - valor

Referência (mutável) - array, object , function
*/


//         01234

/*let a = 'A';
let b = a; //Cópia
console.log (a, b);

a =  'outra coisa';
console.log(a,b);
*/

/*let a = [1, 2, 3];
let b = a;
let c= b;

console.log (a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

console.log(c);
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);