const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function gerarFibonacci(termos){
    if (termos <= 0) return [];
    if (termos === 1) return [0];

    const sequencia = [0, 1]; // Inicia com os dois primeiros valores

    for (let i = 2; i < termos; i++) {
        // Cada novo número é a soma dos dois últimos do array
        const proximoValor = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoValor);
    }

    return sequencia;
}

function inicio() {
    rl.question("Quantos elementos você deseja? ", (resposta1) => {
        const num = Number(resposta1);

            console.log(gerarFibonacci(num));
            rl.close();
        });
}


inicio();