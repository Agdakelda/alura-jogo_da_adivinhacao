





var numberToFind = 0;
var attemps = 0;


function refresh(){ // Função responsável por gerar um numero aleatório.
attemps = 0;
numberToFind = parseInt (Math.random()*100);

 console.log(numberToFind);

}
function verifyNumber(){ // função responsável por verificar o numero selecionado com o numero gerado.

    var bet =document.getElementById("bet").value;
    
    if (bet > 100 || bet < 1){
        alert ("Aposta inválida");
        return;
    }
   
 if(bet > numberToFind){
        attemps++;
        alert("O número a se escolhido é menor, tente novamente:");
    }
    else if(bet< numberToFind){
        alert(" O número encontrado é maior, tente novamente: ");
        attemps++;
    }
    else{
    alert("Parabéns você acertou!! Com "+ attemps + " erros");
    refresh();
    }
}
refresh();