// Initialize variables for the canvas and context
var canvas = document.getElementById("house");
var context = canvas.getContext("2d");

// Initialize global variables for the smoke effect
var i = 1;
var smokeX = 91;
var smokeY = 73;
var radius = 9
var smokeOpacity = 1;

// Draw the initial scene
drawBackground();
drawHouse();

// Starts the smoke animation
setInterval(smoke, 250);

// Function that draws house components to the canvas
function drawHouse() {
	//Side wall
	context.beginPath();
	context.moveTo(17, 139);
	context.lineTo(24, 180);
	context.lineTo(75, 186);
	context.lineTo(66, 142);
	context.fillStyle="#EDB949";
	context.fill();
	
	//Front wall
	context.beginPath();
	context.moveTo(75, 186);
	context.lineTo(93, 178);
	context.lineTo(99, 128);
	context.lineTo(101, 127);
	context.lineTo(83, 95);
	context.lineTo(66, 143);
	context.fillStyle="#F2DD80";
	context.fill();
	
	//Roof
	context.beginPath();
	context.moveTo(98, 132);
	context.lineTo(107, 132);
	context.lineTo(85, 92);
	context.lineTo(37, 88);
	context.lineTo(3, 138);
	context.lineTo(66, 142);
	context.lineTo(83, 96);
	context.lineTo(101, 128);
	context.lineTo(99, 128);
	context.fillStyle="#EC1A23";
	context.fill();
	
	//Door
	context.beginPath();
	context.moveTo(83, 181);
	context.lineTo(77, 147);
	context.lineTo(89, 142);
	context.lineTo(89, 179);
	context.fillStyle="#EDB949";
	context.fill();
	context.lineWidth=2;
	context.strokeStyle="#E8AD47";
	context.stroke();
	
	//Window 1
	context.beginPath();
	context.moveTo(24, 146);
	context.lineTo(41, 146);
	context.lineTo(42, 164);
	context.lineTo(26, 164);
	context.closePath();
	context.fillStyle="#F2DD80";
	context.fill();
	
	//Window 2
	context.beginPath();
	context.moveTo(45, 146);
	context.lineTo(62, 146);
	context.lineTo(63, 164);
	context.lineTo(47, 164);
	context.closePath();
	context.fillStyle="#F2DD80";
	context.fill();
	
	//horizontal line on window 1
	context.beginPath();
	context.moveTo(22, 155);
	context.lineTo(43, 154);
	context.lineWidth=2;
	context.strokeStyle="#EDB949";
	context.stroke();
	
	//Horizontal line on window 2
	context.beginPath();
	context.moveTo(43, 155);
	context.lineTo(63, 154);
	context.lineWidth=2;
	context.strokeStyle="#EDB949";
	context.stroke();
	
	//Vertical line on window 1
	context.beginPath();
	context.moveTo(32, 141);
	context.lineTo(34, 167);
	context.lineWidth=2;
	context.strokeStyle="#EDB949";
	context.stroke();
	
	//vertical line on window 2
	context.beginPath();
	context.moveTo(54, 144);
	context.lineTo(55, 168);
	context.lineWidth=2;
	context.strokeStyle="#EDB949";
	context.stroke();
	
	//Small window
	context.beginPath();
	context.moveTo(78, 116);
	context.lineTo(86, 113);
	context.lineTo(87, 126);
	context.lineTo(79, 129);
	context.closePath();
	context.fillStyle="#EDB949";
	context.fill();
	context.lineWidth=2;
	context.strokeStyle="#E8AD47";
	context.stroke();
	
	//Chimney part 1
	context.beginPath();
	context.moveTo(80, 92);
	context.lineTo(79, 85);
	context.lineTo(92, 87);
	context.lineTo(90, 101);
	context.lineTo(85, 92);
	context.closePath();
	context.fillStyle="#60391C";
	context.fill();
	
	//Chimney part 2
	context.beginPath();
	context.lineTo(92, 87);
	context.lineTo(95, 92);
	context.lineTo(92, 104);
	context.lineTo(89, 100);	
	context.fillStyle="#9C6135";
	context.fill();
	
	//Cloud 1
	context.beginPath();
	context.arc(55, 20, 6, Math.PI, 2 * Math.PI);
	context.arc(70, 25, 10, Math.PI, 2 * Math.PI);
	context.arc(79, 33, 8, 3 / 2 * Math.PI, Math.PI);
	context.arc(68, 37, 6, 0, Math.PI);
	context.arc(54, 31, 12, 0, Math.PI);
	context.arc(41, 31, 10, 0, 3 / 2 * Math.PI);
	context.arc(45, 24, 5, Math.PI, 2 * Math.PI);
	context.fillStyle="white"; //change colour to #FFFFFF
	context.fill();
	
	//Cloud 2
	context.beginPath();
	context.arc(167, 66, 6, Math.PI, 2 * Math.PI);
	context.arc(183, 75, 13, Math.PI, 2 * Math.PI);
	context.arc(195, 84, 9, 4 / 3 * Math.PI, Math.PI);
	context.arc(182, 88, 6, 0, Math.PI);
	context.arc(167, 81, 13, 0, Math.PI);
	context.arc(150, 80, 11, 0, 3 / 2 * Math.PI);
	context.arc(157, 72, 7, Math.PI, 2 * Math.PI);
	context.fillStyle="white"; //change colour to #FFFFFF
	context.fill();
	
	//Cloud 3
	context.beginPath();
	context.arc(248, 27, 9, Math.PI, 2 * Math.PI);
	context.arc(268, 35, 16, Math.PI, 2 * Math.PI);
	context.arc(282, 47, 12, 5 / 4 * Math.PI, Math.PI);
	context.arc(267, 53, 8, 0, Math.PI);
	context.arc(248, 41, 20, 0, Math.PI);
	context.arc(226, 44, 14, 0, 3 / 2 * Math.PI);
	context.arc(235, 38, 13, Math.PI, 2 * Math.PI);
	context.fillStyle="white"; //change colour to #FFFFFF
	context.fill();
}

// Function that draws the background and road to the canvas
function drawBackground() {
	// Creating the background
	var skyGradient = context.createLinearGradient(0, 0, 150, 270);
	skyGradient.addColorStop(0, "#00BEF3");
	skyGradient.addColorStop(1, "white");
	context.fillStyle = skyGradient;
	context.fillRect(0, 0, 300, 300);

	// Set coordinates for the sun
	context.fillStyle = "yellow";
	context.beginPath();
	context.arc(230, 175, 43, 0, 2 * Math.PI);
	context.fill();

	// Set coordinates for the furthest back hill
	var x = 0;
	var y = 300;
	var hillRadius = 150;
	var startAngle = 1 * Math.PI;
	var endAngle = 0;
	context.fillStyle = "#36B04D";
	context.save();
	context.scale(1.5, 1);
	context.beginPath();
	context.arc(x, y, hillRadius, startAngle, endAngle);
	context.fill();
	context.restore();

	// Draws the path from the house
	context.beginPath();
	context.moveTo(83, 181);
	context.quadraticCurveTo(114, 206, 140, 251);
	context.lineTo(158, 241);
	context.quadraticCurveTo(124, 199, 89, 179);
	context.closePath();
	context.fillStyle="#FF6600";
	context.fill();
	
	// Set coordinates for the second hill
	x = 300;
	y = 500;
	hillRadius = 200;
	context.fillStyle = "#B2CF3F";
	context.save();
	context.scale(1, 0.6);
	context.beginPath();
	context.arc(x, y, hillRadius, startAngle, endAngle);
	context.fill();
	context.restore();

	// Set coordinates for the last hill
	x = 0;
	y = 525;
	hillRadius = 250;
	context.fillStyle = "#0E9552";
	context.save();
	context.scale(1, 0.8);
	context.beginPath();
	context.arc(x, y, hillRadius, startAngle, endAngle);
	context.fill();
	context.restore();
}

// Animates the smoke effect
function smoke() {
	var smokeColor = "rgba(120, 133, 122, " + smokeOpacity + ")";
	
	// Prepares background for the smoke to draw on top of
	context.clearRect(0, 0, 300, 300);
	drawBackground();
	drawHouse();

	// Draws the smoke
	context.beginPath();
	context.arc(smokeX, smokeY, radius, 0, 2 * Math.PI);
	context.arc(smokeX + 10, smokeY + 3, radius - 4, 0, 2 * Math.PI);
	context.arc(smokeX - 10, smokeY - 3, radius - 4, 0, 2 * Math.PI);
	context.fillStyle = smokeColor;
	smokeX += 2;
	smokeX *= 1.2;
	smokeY -= 25;
	smokeY *= 1.2;
	radius *= 1.2;
	smokeOpacity -= 0.2;
	context.fill();

	// Resets the smoke to the chimmney when it goes off the canvas
	if (i == 6) {
		i = 0;
	smokeX = 91;
	smokeY = 73;
	radius = 9;
	smokeOpacity = 1;
	}
	i++;
}
