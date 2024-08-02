alert(`Boas vindas ao jogo do número secreto!`);

let numeroSecreto = 10;

let chute = prompt(`Escolha um número entre 1 e 10`);

if(chute == numeroSecreto){
    console.log(`Parabéns você acertou, o número é o ${numeroSecreto}`);
}