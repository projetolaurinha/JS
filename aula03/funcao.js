var Nome
var Email
var num =0;
var saque = 0;
saldo = 1000;


function comretorno (saque){
     saldo = saldo - saque
     return saldo 
}

function escrever (quadro){
   info = "Usuario numero" + (++num) + "\n";
   info += "Nome: "  +  Nome  + "\n"; 
   info += "Email: "  +  Email + "\n";
   info += "Saldo: "  +  comretorno(saque) + "\n \n";
   quadro.value += info;
}