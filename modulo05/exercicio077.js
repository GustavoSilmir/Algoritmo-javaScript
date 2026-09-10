const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function primo(num){
    let divisores = 0;
    let valor = num
    for(let cont = 1; cont <= valor; cont++){
        if(valor % cont == 0)
            divisores++;
    }
    if(divisores == 2){
        return true;
    }else{
        return false;
    }
}

function inicio() {
    // 1. Faz a primeira pergunta
    rl.question("Digite o valor: ", (resposta1) => {
        const num = Number(resposta1);

        // 2. Faz a segunda pergunta DENTRO da resposta da primeira
       
            if(primo(num)){
                console.log(`O valor ${num} é Primo`);
            }else{
                console.log(`O valor ${num} Não é Primo`);
            }
            

            // 4. Encerra a leitura ao final de tudo
            rl.close();
        });
}


inicio();