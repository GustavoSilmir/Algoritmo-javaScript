
 function inicio(){
    
    contagem(10,2,2)
    contagem(15,2,4)
    
}

function contagem(init,fim,pulo)
{
    for(let c = init; c >= fim; c-=pulo){
        let pulo = ""
        console.log(c)
        pulo += "->"
    }
    console.log("FIM..")
}

inicio();