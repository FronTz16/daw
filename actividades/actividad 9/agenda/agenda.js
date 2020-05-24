class contacto{
  constructor(nombre,telefono,email,direccion){
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
    this.direccion = direccion;
  }
}

function getOpc(){
  var opc = prompt("Seleccione una opcion: \n 1.-Nuevo contacto \n 2.-Ver contactos \n 3.-Buscar Contacto"+
                    " \n 4.-Salir" )
  return opc;
}

function menu(){
  var crono;
  console.log("Seleccione una opcion")
  console.log("1.-Nuevo contacto")
  console.log("2.-Ver contactos")
  console.log("3.-Buscar Contacto")
  console.log("4.-Salir")

    var opc = getOpc();
    switch(opc) {
      case "1":
        nuevoContacto(); 
        break;
      case "2":
       verContactos();
        break;
      case "3":
        verContactoNombre();
        break;
      case "4":
        console.log("Adios!")
        break;
      default:
        console.log("Opcion no valida")
        menu()
    }

}
function nuevoContacto(){
  var nombre=prompt("Ingrese el nombre")
  var telefono=prompt("Ingrese el telefono")
  var email= prompt("Ingrese el email")
  var direccion=prompt("Ingrese la direccion")
  var contact = new contacto(nombre,telefono,email,direccion)
  contactosArray.push(contact)
  menu()
}

function verContactos(){
  console.table(contactosArray);
  alert("Contactos mostrados en consola")
  menu();
}


function verContactoNombre(){
  var vnombre = prompt("Ingrese el nombre del contacto que desea buscar")
  cont = contactosArray.find(c => c.nombre == vnombre)
  console.log("Nombre: "+cont.nombre)
  console.log("Telefono: "+cont.telefono)
  console.log("Email: "+cont.email)
  console.log("Direccion: "+cont.direccion)
  
  alert("Contacto mostrado en consola")
  menu()
}
var contactosArray =[]
menu();