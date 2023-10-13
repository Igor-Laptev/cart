const fs = require('fs').promises;

class List {
  constructor(themes) {
    this.themes = themes;
  }

  theme() {
    if (this.themes === 1) {
      return fs.readFileSync('./topics/nighthawk_flashcard_data', ' utf-8');
    }
    if (this.themes === 2) {
      return fs.readFileSync('./topics/otter_flashcard_data.txt', ' utf-8');
    }

    if (this.themes === 3) {
      return fs.readFileSync('./topics/raccoon_flashcard_data.txt', ' utf-8');
    }
  }
}
module.exports = List;
