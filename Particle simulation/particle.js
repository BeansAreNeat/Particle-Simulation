class Particle {
  constructor(index, size, position, velocity, acceleration, color) {
    this.index = index;
    this.size = size;
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration;
    this.color = fill(255);
  }

  // Object collision detection
  collition() {
    for (let i = 0; i < particles.length; i++) {
      if (this.index !== i) {
        let distance = dist(
          this.position.x,
          this.position.y,
          particles[i].position.x,
          particles[i].position.y
        );

        if (distance < this.size + particles[i].size) {
          this.color = fill(255, 0, 0);
          break;
        } else {
          this.color = fill(255);
        }
      }
    }
  }

  // Edge collision detection
  edges() {
    if (this.position.x <= this.size || this.position.x >= width - this.size)
      this.velocity.x *= -1;

    if (this.position.y <= this.size || this.position.y >= height - this.size)
      this.velocity.y *= -1;
  }

  // Position updater
  move() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  // Renderer
  render() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size * 2);
  }

  update() {
    this.collition();
    this.edges();
    this.move();
    this.render();
  }
}
