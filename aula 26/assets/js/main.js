// capturar evento de submit do formulário

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');
console.log(inputPeso);
});

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) {
 const resultado = document.querySelector('#resultado');
 resultado.innerHTML = '';

 const p = criaP();
}