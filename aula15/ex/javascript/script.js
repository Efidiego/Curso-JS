const numero = Number(prompt('Seu número é:'));
const numeroTitulo = document.getElementById('numero-titulo');
const Texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

Texto.innerHTML = '';
Texto.innerHTML += `<p>Raiz quadrada:${numero ** 0.5}.</p>`;
Texto.innerHTML += `<p>É NaN:${Number.isNaN(numero)}.</p>`;
Texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
Texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
Texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
Texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;








//Texto.innerHTML = `<p>É NaN:${Number.isNan(numero)}.</p>`;




