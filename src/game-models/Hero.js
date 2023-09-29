// Наш герой.

class Hero {
  constructor({ position, maxX, maxY }) {
    this.skin = "🤠"; // можете использовать любые emoji '💃'
    this.position = position;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  moveLeft() {
    // Идём влево.
    if (this.position.x > 0) this.position.x -= 1;
  }

  moveRight() {
    // Идём вправо.
    if (this.position.x < this.maxX ) this.position.x += 1;
  }
  moveTop() {
    if (this.position.y > 0) this.position.y -= 1;
  }
  moveDown() {
    if (this.position.y < this.maxY ) this.position.y += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = "💀";
    console.log("YOU ARE DEAD!💀");
    process.exit();
  }
}

module.exports = Hero;
