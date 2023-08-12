let particleCount = 10;
let particles = [];
let shouldSpawnParticle = false;

let size = 100;
let vel;
let pos;
let accel;
let color;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);

  vel = p5.Vector.random2D().mult(2);
  pos = random(10, 30);
  accel = createVector(0, 0.2);
  color = fill(255);

  for (let i = 0; i < particleCount; i++) {
    let particle = new Particle(i, size, pos, vel, accel, color);
    particles.push(particle);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
  }

  if (shouldSpawnParticle) {
    particleCount++;
    let particle = new Particle(
      particles.length,
      size,
      pos,
      vel,
      accel,
      color(255)
    );
    particles.push(particle);
    shouldSpawnParticle = false;
  }
}

function keyPressed() {
  // Press Space to spawn ball
  if (keyCode === 32) shouldSpawnParticle = true;
}
