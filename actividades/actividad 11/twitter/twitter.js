var messages = []

function saveMssg(){
	mssg= document.getElementById("text").value;
	//alert(mssg)

	document.getElementById("posts").innerHTML += "<div class='media pb-3'>"+
		" <img class='mr-3 img-thumbnail user-img' src='user.png'>"+
		"<div class='media-body'>"+ 
		"<div class='row justify-content-start'>"+
		"<div class='col-4'>"+
		"<h5>Hugo Hiram</h5></div>"+ 
		"<div class='col-4'><h5 class='idUser'>@haviles</h5></div>"+
		"</div><p class='text-mssg'>"+mssg+"</p></div></div>";

}