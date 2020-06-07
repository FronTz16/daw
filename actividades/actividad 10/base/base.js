let bases={
	baseF: function(numero){
	binario = numero.toString(2); // A la base 2
 	octal = numero.toString(8);
 	hexa = numero.toString(16);

 	var oct = { base : "Octal", numero : octal }
 	var bin = { base : "Binario", numero : binario }
 	var hex = { base : "Hexadecimal", numero : hexa }
 	var dec ={ base: "Decimal", numero: numero}
 	console.table([dec,oct,bin,hex])
 	menu()
	}
}

function menu(){

	var number = prompt("Ingrese un numero:")
	if (Number.isInteger(+number)){
		bases.baseF(parseInt(number));
	}else{
		console.log("Ingrese un numero valido")
	}
}
menu()