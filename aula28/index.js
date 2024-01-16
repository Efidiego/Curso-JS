//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia); // 01/01/1970 timestamp unix/Época Unix
//const data  = new Date(2020, 3, 20, 15, 14, 27, 999);
//console.log(data.toString());


function formataData(data) {
const dia = data.getDate();
const mes = data.getMonth() + 1;
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();
const seg = data.getSeconds();

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;

}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);