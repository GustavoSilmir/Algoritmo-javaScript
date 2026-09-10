const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somador(n1,n2){
    let soma
    soma = n1 + n2;
    return soma;
}

function inicio() {
    // 1. Faz a primeira pergunta
    rl.question("Digite o primeiro valor: ", (resposta1) => {
        const n1 = Number(resposta1);

        // 2. Faz a segunda pergunta DENTRO da resposta da primeira
        rl.question("Digite o segundo valor: ", (resposta2) => {
            const n2 = Number(resposta2);

            // 3. Calcula e exibe o resultado AQUI DENTRO, onde n1 e n2 existem
            let s = somador(n1, n2);
            console.log(`A soma entre ${n1} e ${n2} é igual a: ${s}`);

            // 4. Encerra a leitura ao final de tudo
            rl.close();
        });
    });
}

inicio();