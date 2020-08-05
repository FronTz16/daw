let jsonObj = {
	"titulo":"", 
	"descripcion":"",
	"coordenadas":""};

function exito(position){
	
	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	document.getElementById("coordenadas").value=lat+","+ lon;
}

function error(){
	alert("No se puede obtener tus coordenadas")
}

function getLocation(){
	
	if (navigator.geolocation){
		navigator.geolocation.watchPosition(exito, error);
	}else{
		alert("Tu explorador no soporta geolocation")
	}
}

function capturar(){
	let config ={
		video:true,
	}
	let video = document.getElementById("video");
	streamVideo = navigator.mediaDevices.getUserMedia({video:true}).then(stream => {this.video.srcObject = stream})
	
}

function getTitle(){

	jsonObj["titulo"]=document.getElementById("nombre").value;
	jsonObj["descripcion"]=document.getElementById("descripcion").value;
	jsonObj["coordenadas"]=document.getElementById("coordenadas").value;
	
	localStorage.setItem("objetoJSON",JSON.stringify(jsonObj));
	alert("Informacion guardada en tu localStorage")
	
}

function takePhoto(){
	let video = document.getElementById("video");
	const stream = video.srcObject;
  	const tracks = stream.getTracks();

	tracks.forEach(function(track) {
	    track.stop();
	});

}


window.onload=function(){
	capturar();
	getLocation();
}
