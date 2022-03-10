let particles = []


function setup() {
createCanvas(800,800);


}

function draw() {
  background(0);

fill(255, 100, 0,);
  rect(0, 0, width, height/2);


  for (let i = 0; i < 3; i++) {
particles.push (new Particle(mouseX,mouseY));
  }

  if(mouseIsPressed) {
    for (let particle of particles) {
    let wind = createVector(0.8,0);
    particle.applyForce(wind);
  }
 }
  for (let particle of particles) {
  let gravity = createVector(0, 0.2);
  particle.applyForce(gravity);

  particle.update();
  particle.edges();
  particle.show();
}

for (var i = particles.length - 1; i >= 0; i--) {
  if (particles[i].finished()) {
    particles.splice(i, 1);

  }
 }
}