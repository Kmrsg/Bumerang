// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 30,
});

console.log(game.track);
// Запуск игры.
game.play();
