alert('Boa Vindas ao jogo do numero secreto!');
let numeroMaximo = 5000
let numeroSecreto = parseInt(Math.random() *numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto){
        break
           
    }else{
        if(chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);   
        } else {
            alert(`O numero secreto é maior que ${chute}`);    
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai ! Você acertou o ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if(tentativas > 1){
//    alert(`Isso ai ! Você acertou o ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
//    alert(`Isso ai ! Você acertou o ${numeroSecreto} com ${tentativas} tentativa`);
//}
