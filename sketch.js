let img

function preload() {
	img = loadImage("./cow.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(220);
	textureMode(NORMAL);
	beginShape();
	texture(img);
	vertex(-80, -80, 0, 0, 0);
	vertex(30, -180, 0, 1, 0);
	vertex(30, 60, 0, 1, 1);
	vertex(-60, 80, 0, 0, 1);
	endShape();
}
