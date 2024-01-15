

// (condição) ? 'Valor Verdadeiro' : 'Valor Falso'

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';


const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);


 /*   if (pontuacaoUsuario >= 1000) {
        console.log ("Parabéns, você ganhou um prêmio!");
    } else {
        console.log ('Não ganhas nada inútil!')
    }

    Se resume em ternário nisto:
    
    const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
    console.log(nivelUsuario);
*/