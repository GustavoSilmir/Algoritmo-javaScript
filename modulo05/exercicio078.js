const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];
function acharMaior(vetor){
    let maior = vetor[0];
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    return maior;
}

function lerValor(contador){
    if(contador > 7){
        console.log("\nValores guardados no array:", numeros);
        const maiorNumero = acharMaior(numeros);
        console.log(`O maior número digitado foi: ${maiorNumero}`);
        rl.close()
        return;
    }
    rl.question(`Digite o ${contador}° valor: `, (resposta) => {
        const valor = Number(resposta);
        numeros.push(valor);

        lerValor(contador + 1);
    })
}

function inicio() {
   console.log('--- DIGITE 7 VALORES ---');
   lerValor(1);
}


inicio();