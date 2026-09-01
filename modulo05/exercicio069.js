function meu_escreva(txt, repeticoes, borda){
    let faixa
    switch(borda){
        case 1:
            faixa = "+----===----"
            break
       case 2:
			faixa = "~~~~~~~~~~:::::::~~~~~~~~~~~~~\n"
				break
				case 3:
			faixa = "<<<<<<<<<<<--------------->>>>>>>>>>>>\n"	
				break

			default:
			faixa = ""
			break

    }
    let cont = 1
    console.log(faixa);
    while(cont <= repeticoes) {
        console.log(txt, " \n");
        cont++
    }
    console.log(faixa)

}

function principal(){
    meu_escreva("estou aprendendo a programar", 1,1)
    meu_escreva("Amei aprender funções", 2, 3)
}

principal();