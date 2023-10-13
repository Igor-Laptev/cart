const fs = require("fs");

const { EOL } = require("os");

class List {
  constructor(themes) {
    this.themes = themes;
  }
  questions() {
    if (this.themes === "1") {
      return fs

        .readFileSync("./topics/donor.txt", "utf-8")
        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }
    if (this.themes === "2") {
      return fs

        .readFileSync("./topics/films.txt", "utf-8")
        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }

    if (this.themes === "3") {
      return fs

        .readFileSync("./topics/mult.txt", "utf-8")
        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 === 0);
    }
  }

  answers() {
    if (this.themes === "1") {
      return fs
        .readFileSync("./topics/donor.txt", "utf-8")

        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }
    if (this.themes === "2") {
      return fs
        .readFileSync("./topics/films.txt", "utf-8")

        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }

    if (this.themes === "3") {
      return fs
        .readFileSync("./topics/mult.txt", "utf-8")

        .split(EOL)

        .filter((el) => el !== "")
        .filter((el, i) => i % 2 !== 0);
    }
  }
}
module.exports = List;
