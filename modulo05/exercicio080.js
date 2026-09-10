const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function mudaPreco(valor, alteracao, situacao){
    let porcentagem = (valor * alteracao) / 100;
    if(situacao == "A" || situacao == "a"){
        
        return valor + porcentagem;
    }else if(situacao == "D" || situacao == "d"){
        return valor - porcentagem;
    }
   
}

function inicio() {
    console.log(mudaPreco(1000,20,"A"))
    console.log(mudaPreco(1000,20,"d"))
    console.log(mudaPreco(1000,10,"d"))
}


inicio();