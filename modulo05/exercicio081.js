const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [];
function situacao(valor){
   if(valor >= 7){
    return "Aprovado";
   }else{
    return "Reprovado"
   }
}

function media(n1,n2){
   let media = 0
   media = (n1 + n2) / 2
   return situacao(media)
}

function inicio() {
  rl.question("Digite a primeira nota: ", (resposta1) => {
        const n1 = Number(resposta1);

        // 2. Faz a segunda pergunta DENTRO da resposta da primeira
        rl.question("Digite a segunda nota: ", (resposta2) => {
            const n2 = Number(resposta2);

            // 3. Calcula e exibe o resultado AQUI DENTRO, onde n1 e n2 existem
            let s = media(n1, n2);
            console.log(`A soma entre ${n1} e ${n2} é igual a: ${s}`);

            // 4. Encerra a leitura ao final de tudo
            rl.close();
        });
    });
}


inicio();