function smoothstep(edge0, edge1, x) {
  t = constrain((x - edge0)/(edge1 - edge0), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  steps = height/2;
  stroke(255);
  strokeWeight(2);
  noFill();
  let mx = mouseX/width*1000;
  let my = mouseY/height*1000;
  beginShape();
  vertex(0, 0, 0);
  for (let i = 0; i < steps/2.5; i++) {
    let radius = smoothstep(0, steps/2.5, i) * height;
    let x = sin(frameCount*i/mx)*(radius);
    let y = cos(frameCount*i/my)*(radius);
    let z = cos(frameCount*i/1000.0)*(radius/10.0);
    curveVertex(x, y, z);
  }
  endShape();
}

function setup() 
{
	let c = createCanvas(windowWidth, windowHeight);
    c.style.position = "absolute";
    c.style.top = "0px";
    c.style.left = "0px";
}

