function menu(){
	var crono;
	console.log("Seleccione una opcion")
	console.log("1.-Temporizador")
	console.log("2.-Cronometro")
	console.log("3.-Salir")

		var opc = getOpc();
		switch(opc) {
		  case "1":
		  	temporizador();	
		    break;
		  case "2":
		   cronometro();
		    break;
		  case "3":
		    console.log("Adios!")
		    break;
		  default:
		    console.log("Opcion no valida")
		    menu()
		}

}
function cronometro(){
	var initialTime=0;
	crono = setInterval(function(){
		console.log(initialTime);
		initialTime += 1;
	}, 1000);
}

function stop(){
	 clearInterval(crono);
	 alert("Se ha detenido el tiempo");
	 menu();
}
function getOpc(){
	var opc = prompt("Seleccione una opcion: \n 1.-Temporizador \n 2.-Cronometro \n 3.-Salir")
	return opc;
}

function temporizador() {
	
	var timeleft = prompt("Ingrese el tiempo en segundos:")
	if (Number.isInteger(+timeleft)){
		var downloadTimer = setInterval(function(){
	  		if(timeleft <= 0){
		    	clearInterval(downloadTimer);
		    	console.log("Finalizado!")
		    	menu();
			}else if(timeleft>10){
				console.log("%c"+timeleft,'color:green;')
			}else if(timeleft<=10 && timeleft>5){
				console.log("%c"+timeleft,'color:yellow;')
			}else if(timeleft<=5){
				console.log("%c"+timeleft,'color:red;')
			}
			timeleft -= 1;
		}, 1000);
	} else {
		console.log("Valor invalido regresando al menu")
		menu();
	}
	
}

menu();