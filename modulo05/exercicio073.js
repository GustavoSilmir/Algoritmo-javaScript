
 function inicio(){
    
    contagem(0,10,2)
    contagem(1,16,4)
    
}

function contagem(init,fim,pulo)
{
    for(let c = init; c <= fim; c+=pulo){
        let pulo = ""
        console.log(c)
        pulo += "->"
    }
    console.log("FIM..")
}

inicio();