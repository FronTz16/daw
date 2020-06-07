

function encrip(){

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", 

			  "s", "t", "u", "v", "w", "x", "y", "z", " "]

var frase = prompt("Ingrese su palabra en minusculas")

 var cadena = frase.split("")


 for(i=0; i<cadena.length; i++){

 		var found = letras.findIndex(element => element == cadena[i]);
 		if(found == letras.length-1){
 			cadena[i] = letras[0]
 		}
 		else{

 		cadena[i] = letras[found + 1]
 	}

 }

 alert(cadena)

}

function des(){

var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", 

			  "s", "t", "u", "v", "w", "x", "y", "z", " "]

var frase = prompt("Ingrese su plabra en minusculas")

 var cadena = frase.split("")

 for(i=0; i<cadena.length; i++){

 		var found = letras.findIndex(element => element == cadena[i]);
 		if(found == letras.length-1){
 			cadena[i] = letras[0]
 		}
 		else{

 		cadena[i] = letras[found - 1]
 	}

 }

 alert(cadena)

}