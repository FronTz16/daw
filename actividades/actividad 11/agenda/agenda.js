var contactos=[];

function guardar(){
	
	nombre= document.getElementById("nombre").value;
	if (validateForm() == true){
		crearContacto()
		document.getElementById("nombre").value='';
		document.getElementById("numero").value='';
		document.getElementById("email").value='';
		document.getElementById("direccion").value='';
		alert("Contacto Creado");
	}
}

function crearContacto(){
	var contacto = new Object();
	contacto.nombre = document.getElementById("nombre").value;
	contacto.numero = document.getElementById("numero").value;
	contacto.correo = document.getElementById("email").value;
	contacto.direccion = document.getElementById("direccion").value;
	contactos.unshift(contacto);
}

function buscarC(){

	document.getElementById("contactos").innerHTML="";
	var nombre = document.getElementById("buscar").value;

	for (var i = 0; i < contactos.length; i++) {
        if (contactos[i]["nombre"] === nombre) {
            var n="'"
            console.log(n)
            n+=nombre+"'"
            console.log(n)
            document.getElementById("contactos").innerHTML +="<div class='col' id='contacto'>"+
            "<a href='#' onclick="+'verContacto("'+nombre+'")'+">"+contactos[i]["nombre"]+"</a>"+
            "<hr class='hr-primary' /></div>";
        }
    }

}

function verContacto(nombre){
	var name;
	var email;
	var direccion;
	var numero;

	for (var i = 0; i < contactos.length; i++) {
        if (contactos[i]["nombre"] === nombre) {
            
            name=nombre;
            email= contactos[i]["correo"];
            direccion= contactos[i]["direccion"];
            numero = contactos[i]["numero"];
            break;

        }
    }
    alert(name+"\n"+direccion+"\n"+email+"\n"+numero)

}

function validateForm(){
	var name = document.getElementById("nombre").value;
	var address = document.getElementById("direccion").value;
	var phone = document.getElementById("numero").value;
	var email = document.getElementById("email").value;

  	if (name == "" || address==""|| phone== "" || email=="") {
   		alert("Debes llenar todos los campos")
    	return false;
  	}else{
  		return true;
  	}
}