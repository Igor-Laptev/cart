const fs = require("fs").promises;
const User = require("./user.js");
const Quest = require("./Qa.js");
const readline = require("readline");

async function reg() {
  try {
    const rl = readline.Interface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });
    console.log("Привет, как тебя зовут? ");

    rl.prompt();

    rl.on("line", (input) => {
      const name = input.trim();
      if (name) {
        rl.close();
        console.log(`Привет! ${name}`);
      } else {
        console.log("Пожалуйста, введите ваше имя:");
        rl.prompt();
      }
    });
  } catch (error) {
    console.error(error);
  }
}

