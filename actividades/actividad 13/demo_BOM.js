
function ventana1() {
    var altura = window.innerHeight;
    alert("la altura de la venta es: " + altura)
}
function ventana2() {
    var anchura = window.innerWidth;
    alert("la anchura de la venta es: " + anchura)
}
function ventana3() {
    myWindow = window.open('', '', 'width=200, height=100');
    myWindow.document.write("<p>PARA MOVER LA VENTANA USAR LA OPCION 5 Y LA 6 PARA EL TAMAÑO'</p>");
}
function ventana4() {
    myWindow.close();
}
function ventana5() {
    myWindow.moveTo(150, 150);
    myWindow.focus();
}
function ventana6() {
    myWindow.resizeTo(800, 600);
    myWindow.focus();
}
function ventana7() {
    alert(
        " Esta es una Alerta"
    )
}
function ventana8() {
    window.prompt("Este es un promt")
}
function ventana9() {
    window.confirm()	
}

function screen1(){
    var x = "Total Height: " + screen.height;
    alert(
        x
    )
}
function screen2(){
    var x = "Total width: " + screen.width;
    alert(
        x
    )
}
function screen3(){
    var x = "Available Width: " + screen.availWidth;
    alert(
        x
    )
}
function screen4(){
    var x = "Available Height: " + screen.availHeight;
    alert(
        x
    )
}
function screen5(){
    var x = "Color Depth: " + screen.colorDepth;
    alert(
        x
    )
}
function screen6(){
    var x = "Color Resolution: " + screen.pixelDepth;
    alert(
        x
    )
}

function location1(){
    var x = location.href;
    alert(
        x
    )
}
function location2(){
    var x = location.hostname;
    alert(
        x
    )
}
function location3(){
    var x = location.protocol;
    alert(
        x
    )
}
function location4(){
    location.assign("https://xionel-portafolio.herokuapp.com/");
}
function location5(){
    alert(
        "se actualizara la pagina"
    )
    location.reload();
}
function location6(){
    location.replace("https://xionel-portafolio.herokuapp.com/");
}

function historial1(){
    var x = history.length;
    alert(
        x
    )
}
function historial2(){
    window.history.back();
}
function historial3(){
    window.history.forward();
}
function historial4(){
    window.history.go(-2);
}

function navigator1(){
    var x = "Browser CodeName: " + navigator.appCodeName;
    alert(
        x
    )
}
function navigator2(){
    var x = "Browser Name: " + navigator.appName;
    alert(
        x
    )
}
function navigator3(){
    var x = "Version Info: " + navigator.appVersion;
    alert(
        x
    )
}
function navigator4(){
    var x = "User-agent header sent: " + navigator.userAgent;
    alert(
        x
    )
}
function navigator5(){
    var x = "Language of the browser: " + navigator.language;
    alert(
        x
    )
}
function navigator6(){
    var x = "Platform: " + navigator.platform;
    alert(
        x
    )
}
function navigator7(){
    var x = "Is the browser online? " + navigator.onLine;
    alert(
        x
    )
}
