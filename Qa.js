const fs = require("fs");

class List {
  constructor(themes) {
    this.themes = themes;
  }

  questions() {
    if (this.themes === "1") {
      return fs
        .readFileSync("./topics/theme_1.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }
    if (this.themes === "2") {
      return fs
        .readFileSync("./topics/theme_2.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }

    if (this.themes === "3") {
      return fs
        .readFileSync("./topics/theme_3.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }
  }

  answers() {
    if (this.themes === "1") {
      return fs
        .readFileSync("./topics/nighthawk_flashcard_data.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }
    if (this.themes === "2") {
      return fs
        .readFileSync("./topics/otter_flashcard_data.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }

    if (this.themes === "3") {
      return fs
        .readFileSync("./topics/raccoon_flashcard_data.txt", "utf-8")
        .split("\n")
        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }
  }
}

module.exports = List;
