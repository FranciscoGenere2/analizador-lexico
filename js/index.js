setTimeout(function(){
var entrada = document.getElementById('entrada'); //Capturo el id que se envia desde index.html
var resultado = document.getElementById('resultado'); //Capturo el id que se envia desde index.html
var entrada2 = entrada.innerHTML.split(/\s+/); //IGNORA LOS ESPACIOS VACIOS

//CON EL BUCLE FOR itero con la variable caracter la entrada2 que contiene la entrada sin espacios
for (var caracter in entrada2){
    if (/^[a-zA-Z]$/.test(entrada2[caracter])){ //Reconoce todas las letras del abecedario
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es una Identificador\n\n";
    }else if (/^[1-9]|[0-9]$/.test(entrada2[caracter])){ //Reconoce todos los numeros
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Numero\n\n";
    }else if (/^(bin)[0-1]$/.test(entrada2[caracter])){ //Reconoce numeros binarios
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Binario\n\n";
    }else if (/^[*]$/.test(entrada2[caracter])){ //Reconoce el signo de multiplicacion
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un operador de Multiplicacion\n\n";
    }else if (/^[+]$/.test(entrada2[caracter])){ //Reconoce el signo de suma
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un operador de Suma\n\n";
    }else if (/^[-]$/.test(entrada2[caracter])){ //Reconoce el signo de resta
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un operador de Resta\n\n";
    }else if (/^[/]$/.test(entrada2[caracter])){ //Reconoce el signo de division
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un operador de Division\n\n";
    }else if (/^[=]$/.test(entrada2[caracter])){ //Reconoce el signo de igualdad
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un operador de Igualdad\n\n";
    }else if (/^[{]$/.test(entrada2[caracter])){ //Reconoce la llave izquierda
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }else if (/^[}]$/.test(entrada2[caracter])){ //Reconoce la llave derecha
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }else if (/^[(]$/.test(entrada2[caracter])){ //Reconoce el parentesis izquierdo
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }else if (/^[)]$/.test(entrada2[caracter])){ //Reconoce el parentesis derecho
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }else if (/^[.]$/.test(entrada2[caracter])){ //Reconoce el signo de punto
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Punto\n\n";
    }else if (/^[[]$/.test(entrada2[caracter])){ //Reconoce el corchete izquierdo
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }else if (/^[]]$/.test(entrada2[caracter])){ //Reconoce el corchete derecho
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es un Delimitador\n\n";
    }
    //Aqui se reconocen las palabras reservadas
    else if (/(for|while|if|true|false|else|case|break|catch|continue|default|delete|do|function|in|instanceof|new|return|switch|this|throw|try|typeof|var|void|with)/.test(entrada2[caracter])){
        resultado.innerHTML = resultado.innerHTML + "["+ entrada2[caracter] + "] Es una palabra reservada\n\n";
    }

}

}, 2000);