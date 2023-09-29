// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
// const Boomerang = require('./game-models/Boomerang');
const View = require("./View");
const keypress = require("keypress");

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  // размер поля в высоту, добавляем высоту
  constructor({ trackLength, trackHeight }) {
    this.trackLength = trackLength;
    this.trackHeight = trackHeight;
    this.hero = new Hero({
      position: { x: 0, y: 0 },
      maxX: trackLength,
      maxY: trackHeight,
    });
    // Герою можно аргументом передать бумеранг. // задвем кординаты герою
    this.enemy = new Enemy({
      position: {
        x: Math.floor(trackLength / 2),
        y: Math.floor(trackHeight / 2),
      },
    });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных,создаем трек
    // this.track = new Array(this.trackLength).fill(" ");
    // this.track[this.hero.position] = this.hero.skin;
    for (let row = 0; row <= this.trackHeight; row++) {
      this.track[row] = [];
      for (let col = 0; col <= this.trackLength; col++) {
        if (this.hero.position.x == col && this.hero.position.y == row) {
          this.track[row][col] = this.hero.skin;
        } else if (
          this.enemy.position.x == col &&
          this.enemy.position.y == row
        ) {
          this.track[row][col] = this.enemy.skin;
        } else {
          this.track[row][col] = " ";
        }
      }
    }
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
