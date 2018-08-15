function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill("#F3F70A");
  ellipse(250, 250, mouseX, mouseX);
  fill("#480AF7");
  ellipse(200, 200, mouseX, mouseX);
  fill("#480AF7");
  ellipse(300, 200, 50, 50);
  fill("#0AF7F5");
  rect(190, 300, 120, 20);
}
