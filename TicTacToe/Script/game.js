var winnerX = "";
var winnerO = "";
var arrays = [];
var tieCount = 0;
var endGame = false;
		
function allowDrop(ev) {
	ev.preventDefault();
}
	
function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	var copy = document.createElement("img");
	var original = document.getElementById(data);
	copy.src = original.src;
	ev.target.appendChild(copy);
	ev.target.removeAttribute("ondragover");
	ev.target.firstChild.setAttribute("draggable", "false");
	tieCount += 1;

	if (data == 'drag1' || data == 'drag11') {
		document.getElementById("drag1").setAttribute("draggable", "false");
		document.getElementById("drag11").setAttribute("draggable", "false");
		ev.target.style.background = "#0077EE";
		document.getElementById("drag2").setAttribute("draggable", "true");
		document.getElementById("drag22").setAttribute("draggable", "true");
		arrays [(ev.target.id).substring(3)] = 1;
		winner();
	} else {
		document.getElementById("drag1").setAttribute("draggable", "true");
		document.getElementById("drag11").setAttribute("draggable", "true");
		ev.target.style.background = "#FF8811";
		document.getElementById("drag2").setAttribute("draggable", "false");
		document.getElementById("drag22").setAttribute("draggable", "false");
		arrays [(ev.target.id).substring(3)] = -1;
		winner();
	}
}
		
function winner() {
	if(endGame == false) {
		if (arrays[0] + arrays[1] + arrays [2] == 3 ||
			arrays[3] + arrays[4] + arrays [5] == 3 ||
			arrays[6] + arrays[7] + arrays [8] == 3 ||
			arrays[0] + arrays[3] + arrays [6] == 3 ||
			arrays[0] + arrays[3] + arrays [6] == 3 ||
			arrays[1] + arrays[4] + arrays [7] == 3 ||
			arrays[2] + arrays[5] + arrays [8] == 3 ||
			arrays[0] + arrays[4] + arrays [8] == 3 ||
			arrays[2] + arrays[4] + arrays [6] == 3) {
			endGame = true;
			document.getElementById('winner').className+='winner';
			document.getElementById('winner').innerHTML='DRAGON IS THE WINNER!';
			document.getElementById("drag1").setAttribute("draggable", "false");
			document.getElementById("drag11").setAttribute("draggable", "false");
			document.getElementById("drag2").setAttribute("draggable", "false");
			document.getElementById("drag22").setAttribute("draggable", "false");
			
	} else if (arrays[0] + arrays[1] + arrays [2] == -3 ||
			   arrays[3] + arrays[4] + arrays [5] == -3 ||
			   arrays[6] + arrays[7] + arrays [8] == -3 ||
		       arrays[0] + arrays[3] + arrays [6] == -3 ||
		       arrays[0] + arrays[3] + arrays [6] == -3 ||
		       arrays[1] + arrays[4] + arrays [7] == -3 ||
		       arrays[2] + arrays[5] + arrays [8] == -3 ||
		       arrays[0] + arrays[4] + arrays [8] == -3 ||
		       arrays[2] + arrays[4] + arrays [6] == -3) {
		endGame = true;
		document.getElementById('winner').className+='winner';
		document.getElementById('winner').innerHTML='MONKEY IS THE WINNER!';
		document.getElementById("drag1").setAttribute("draggable", "false");
		document.getElementById("drag11").setAttribute("draggable", "false");
		document.getElementById("drag2").setAttribute("draggable", "false");
		document.getElementById("drag22").setAttribute("draggable", "false");
			
	} else if(tieCount === 9) {
		endGame = true;
		document.getElementById('winner').className+='winner';
		document.getElementById('winner').innerHTML='TIE GAME!';
		document.getElementById("drag1").setAttribute("draggable", "false");
		document.getElementById("drag11").setAttribute("draggable", "false");
		document.getElementById("drag2").setAttribute("draggable", "false");
		document.getElementById("drag22").setAttribute("draggable", "false");
		}
	}
}
		
function reset() {
	window.location.reload();
}