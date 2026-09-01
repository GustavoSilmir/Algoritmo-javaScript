const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function inicio(){
    const rl = readline.createInterface({input, output});
    const tabuadaPergunta = await rl.question("Qual tabuada você quer analisar? ");
    const num = Number(tabuadaPergunta)
    tabuada(num)
    rl.close();
}

function tabuada(n){
    console.log(`--- Tabuada de ${n} ---`)
    for(let i = 1; i <= 10; i++){
        let calc = n * i;
        console.log(`${n} x ${i} = ${calc}`)
    }
}

inicio();