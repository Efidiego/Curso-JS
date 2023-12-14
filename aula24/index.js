/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa Noite
Acima de 24 - Horário Inválido
*/

// IF - Pode ser usado sozinho.
// Sempre que utilizar a palavra ELSE, precisa-se de um IF antes.
// Eu posso ter vários ELSE´S / IF´S na checagem.
// Só posso ter um ELSE na checagem.
// Podemos usar condições sem (else if), utilizando apenas If e Else.


const hora = 20;

if (hora >= 0 && hora <= 11) {
    console.log("Bom dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde!");
} else if (hora >= 18 && hora <=23) {
    console.log("Boa noite!");
} else {
    console.log("Horário inválido!")
}


/*const tenhoGrana = NaN;

if (tenhoGrana) {
    console.log('saiu de casa');
}
*/