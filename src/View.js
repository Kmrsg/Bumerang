// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render() {
    const yourTeamName = "Elbrus";

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(""));
    console.log("\n\n");
    console.log(`Created by "${yourTeamName}" with love`);
  }

  renderTrack(track) {
    console.clear();
    track.forEach((element, index) => {
      process.stdout.write(element.join("")); // убирает прыганье смайлика
      if (index < track.length) process.stdout.write("\n");
    });
  }
}

module.exports = View;
