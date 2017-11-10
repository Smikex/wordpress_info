// modal window

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
}
span.onclick= function() {
	modal.style.display= "none";
}
window.onclick=function(event) {
	if (event.target == modal){
		modal.style.display = "none";
	}
}

// Animation

function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (pos == 350){
			clearInterval(id);
		}else{
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';

		}
	}
}

// Slider

