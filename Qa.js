const fs = require('fs').promises;

class List {
  constructor(themes) {
    this.themes = themes;
  }

  theme() {
    if (this.themes === 1) {
      return fs.readFileSync('./topics/nighthawk_flashcard_data', ' utf-8');
    }
  }
}

module.exports = List;
