// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().



// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  // размер поля в высоту, добавляем высоту
  constructor({ trackLength, trackHeight }) {
    this.trackLength = trackLength;

    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)

  }

  check() {
    if (
      this.hero.position.x === this.enemy.position.x &&
      this.hero.position.y === this.enemy.position.y
    ) {
      this.hero.die();
    }
  }

  play() {
    this.claviatura();
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.renderTrack(this.track);
    }, 150);
  }

  claviatura() {
    const keyboard = {
      up: () => this.hero.moveTop(),
      down: () => this.hero.moveDown(),
      left: () => this.hero.moveLeft(),
      right: () => this.hero.moveRight(),
    };

    keypress(process.stdin);
    process.stdin.on("keypress", (ch, key) => {
      if (key) {
        // Вызывает команду, соответствующую нажатой кнопке.
        if (key.name in keyboard) {
          keyboard[key.name]();
        }
        // Прерывание программы.
        if (key.ctrl && key.name === "c") {
          process.exit();
        }
      }
    });
    process.stdin.setRawMode(true);
  }
}

module.exports = Game;
