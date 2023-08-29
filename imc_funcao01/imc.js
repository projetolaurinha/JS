function calcula_imc(){

    var altura = document.imcform.altura.value;
    var peso = document.imcform.peso.value;
    var calculo = (peso/(altura*altura));

    if(calculo< 18.5){
        alert("você está magro com esse indice:  " + calculo);
    }

    else if(calculo>=18.5 && calculo< 24.9){
        alert("você está normal com esse indice:  " + calculo);
    }
    
    else if(calculo>=25 && calculo< 29.9){
        alert("você está sobre peso com esse indice:  " + calculo);
    }

    else if(calculo>=30 && calculo< 39.9){
        alert("você está obesidade com esse indice:  " + calculo);
    }

    else if(calculo>40){
        alert("você está obesidade grave com esse indice:  " + calculo);
    }


}