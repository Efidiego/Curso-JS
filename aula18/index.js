
/*
const array = [1,2,3];
array.push(4);
array[0] = 'Fernando'
console.log(array) // ['Fernando', 2, 3, 4]
*/



/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Fernando', 'Diego', 25);
const pessoa2 = criaPessoa('Fernando', 'Carlos', 32);
const pessoa3 = criaPessoa('Fernando', 'Mourão', 50);
const pessoa4 = criaPessoa('Fernando', 'Alexandre', 75);
const pessoa5 = criaPessoa('Fernando', 'Diego', 15);

console.log (pessoa1.nome, pessoa2.nome);
*/

const pessoal = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 25,

    fala() {
        console.log (`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() { 
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();