
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
var lunes = [];
var martes = [];
var miercoles = [];
var jueves = [];
var viernes = [];
var sabado = [];
var domingo = [];
var semanaFull = [lunes, martes, miercoles, jueves, sabado, domingo]

function realizar(){  
var opcion
opcion = 0
while(opcion != 5){
	opcion = prompt("Que desea hacer\n 1.-Ver plan semanal\n 2.-Ver actividad por día\n 3.-Agregar actividad a un día\n 4.-Agregar todas las avtividades\n 5.- salir")
	switch(opcion){
		case "1": 
			console.clear()
			verSemana()
			break;
		case "2": 
			console.clear()
			verDia()
			break;
		case "3":
			console.clear()
			var dia1 = prompt("Ingrese el dia de la semana en numero");
			agregarDia(dia1);
			break;
		case "4":
			console.clear()
			agregarSemana()
		case "5":
			console.clear()
			console.log("Adios");
			break;
		default:
			console.clear()
			console.log("Opcion no valida");
			break;
		}
	}

}


function verSemana(){
	for(i = 0; i < 7; i++)
		console.log(semana[i])
		console.table(semanaFull[i]);
}

function verDia(){
	var dia = prompt("Ingrese el dia de la semana en numero");
	console.table(semanaFull[dia])

}

function agregarDia(dia){
	
	var prioridad = prompt("Ingrese la prioridad (1-5)");
	var nombre = prompt("Ingrese el nombre de la actividad");
	semanaFull[dia].push([prioridad,nombre]);

}

function agregarSemana(){
	for(i = 0; i<7; i++){
		for(j=0; j<5; j++){
		agregarDia(i);
		}
	}

}

realizar()