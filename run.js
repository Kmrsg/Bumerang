// Основной файл.
// Запускает игру.
const Game = require("./src/Game");

// Инициализация игры с настройками. /// cюда добавляем высоту и ширину
const game = new Game({
  trackLength: process.stdout.columns - 2, // сколько символов доступно в ширину
  //(глобальный объект в ноде джсб стдаут объект со стандртным выходом = терминал, колумн колличество колонок в терминале
  trackHeight: process.stdout.rows - 2,
});

// Запуск игры.
game.play();
