function iniciar(){

let abcdef = prompt("Elige una operacion: \n 1.-Sumar \n 2.-Restar \n 3.-Multiplicar \n 4.-Dividir \n (Abre la consola)" );
switch(abcdef) {
    case '1':
      sumar();
      break;
    case '2':
      restar();
      break;
    case '3':
      multi();
      break;
    case '4':
        dividir();
        break;
    default:
      // code block
  }
}

function sumar(){
    let a = prompt("introduce un numero entero");
let b = prompt("introduce otro numero entero");
    let c = parseFloat(a) + parseFloat(b);
    
    console.log("los numeros que insertaste suman " + c);
    var sino = prompt("Quieres añadir otro numero si/no?");
        while(sino == "si"){
            let z = prompt("Inserta el otro numero");
            y = parseFloat(c) + parseFloat(z);
            console.log("La nueva suma da " + y);
            c = y;
            y = 0;
            var sino = prompt("Quieres añadir otro numero si/no?");
        }
}

function restar(){
    let a = prompt("introduce un numero entero");
let b = prompt("introduce otro numero entero");
    let d = parseFloat(a) - parseFloat(b);
    console.log("los numeros que insertaste restan " + d);
    var sino = prompt("Quieres añadir otro numero si/no?");
        while(sino == "si"){
            let z = prompt("Inserta el otro numero");
            y = parseFloat(d) - parseFloat(z);
            console.log("La nueva resta da " + y);
            d = y;
            y = 0;
            var sino = prompt("Quieres restar otro numero si/no?");
        }
}

function multi(){
    let a = prompt("introduce un numero entero");
let b = prompt("introduce otro numero entero");
    let e = parseFloat(a) * parseFloat(b);
    console.log("los numeros que insertaste multiplicados dan " + e);
    var sino = prompt("Quieres añadir otro numero si/no?");
        while(sino == "si"){
            let z = prompt("Inserta el otro numero");
            y = parseFloat(e) * parseFloat(z);
            console.log("La nueva multiplicación da " + y);
            e = y;
            y = 0;
            var sino = prompt("Quieres multiplicar otro numero si/no?");
        }
}

function dividir(){
    let a = prompt("introduce un numero entero");
let b = prompt("introduce otro numero entero");
    let f = parseFloat(a) / parseFloat(b);
    console.log("los numeros que insertaste divididos dan " + f);
    var sino = prompt("Quieres dividir otro numero si/no?");
        while(sino == "si"){
            let z = prompt("Inserta el otro numero");
            y = parseFloat(f) / parseFloat(z);
            console.log("El numero guardado dividido entre el nuevo numero ingresado da " + y);
            f = y;
            y = 0;
            var sino = prompt("Quieres dividir entre otro numero si/no?");
        }
}

function borrar(){
    console.clear;
}

iniciar()