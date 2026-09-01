function inicio()
{
    mensagem("Tudo bem? ")
}

function mensagem(txt)
{
    let tam = txt.length;
    linha(tam)
   console.log(txt);
    
    linha(tam)
}

function linha(tam)
{
    let borda = "";
    for(let q = 1; q <= tam; q++){
        borda += "-"
    }
    console.log(borda)
}

inicio()