function inicio()
{
    quadrado(4)
    quadrado(2)
    quadrado(3)
    quadrado(9)
}

function quadrado(num){
    for(let c = 1; c <= num;  c++){
        let linha = "";
        for(let l = 1; l <= num; l++){
            linha += "\u{2751}";
        }
        console.log(linha)
    }
    console.log(`${num} x ${num}, \n`)
}

inicio()