"use strict";

	window.onload = function() {
	  var startButton = document.getElementById("start");
	  startButton.onclick = start;

	  var stopButton = document.getElementById("stop");
	  stopButton.onclick = stop;



	}

	var timer;

	function start() {
	  var text = document.getElementById("words").value;
	  var list = text.split(/\s+/);
	  runDisplay(list, "display")
	}

	function runDisplay(data, id) {
	  var reader = document.getElementById(id);
	  var index = 0;

	  if (timer) {
	    clearInterval(timer);
	  }
	  if (data.length) {
	    timer = setInterval(function() {
	      reader.innerHTML = data[index++];
	      index = index % data.length;
	    }, 400);
	  }
	}

	function stop() {
	  clearInterval(timer);
	  timer = null;
	}

	function fontSizeChange() {
	  var display = document.getElementById("display");
	  // verifique dos veces para ver si puede inicializar una matriz de esta manera
	  var fontChecked = [document.getElementById("36pt"),
	    document.getElementById("48pt"),
	    document.getElementById("78pt")
	  ];
	  for (var i = 0; i < fontChecked.length; i++) {
	    if (fontChecked[i].checked == true) {
	      display.style.fontSize = fontChecked[i].id;
	    }
	  }
	  display.innerHTML = "String";
	}
