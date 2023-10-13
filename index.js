const readline = require("readline");
const List = require("./Qa");
const Users = require("./user");
const fs = require("fs/promises");

function getName() {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    console.log("\x1b[44m Привет, как тебя зовут? \x1b[0m ");

    rl.prompt();

    rl.on("line", (input) => {
      const name = input.trim();
      if (name) {
        rl.close();
        resolve(name);
      } else {
        console.log("\x1b[45mПожалуйста, введите ваше имя:\x1b[0m");
        rl.prompt();
      }
    });
  });
}
function play(theme) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    console.log(`${theme}`);

    rl.prompt();

    rl.on("line", (input) => {
      const userAnswer = input.trim();
      if (userAnswer) {
        rl.close();
        resolve(userAnswer);
      } else {
        console.log("\x1b[45m Пожалуйста, выбери тему\x1b[0m");
        rl.prompt();
      }
    });
  });
}
function choose(name) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });

    console.log(
      `\x1b[34m ${name} Выбери тему: \n \x1b[31m 1. Донорство \x1b[32m 2. Цитаты из фильмов \x1b[33m 3. Спанч Боб\x1b[0m`
    );

    rl.prompt();

    rl.on("line", (input) => {
      const num = input.trim();
      if (name) {
        rl.close();
        resolve(num);
      } else {
        console.log(
          `${name} Выбери тему: \n 1. Донорство 2. Цитаты из фильмов 3. Спанч Боб`
        );
        rl.prompt();
      }
    });
  });
}
async function main() {
  try {
    const name = await getName();
    const user = new Users(name);
    let counter = "";
    let kek = 3;
    for (let i = 0; i < kek; i += 1) {
      const num = await choose(name);
      if (counter === num) {
        console.clear();
        kek += 1;
        console.log("Эту тему ты уже выбирал");
      } else {
        counter = num;
        const theme = new List(num);
        for (let i = 0; i < theme.questions().length; i += 1) {
          const answ = await play(theme.questions()[i]);
          if (answ.toLowerCase() === theme.answers()[i].toLowerCase()) {
            console.log("Молодец!");
            user.calculatorPLus(100);
            console.log(`Ваши очки: ${user.score}`);
          } else {
            console.log(
              `Ошибочка вышла... \nПравильный ответ: ${theme.answers()[i]}`
            );
            user.calculatorMinus(100);
            console.log(`Ваши очки: ${user.score}`);
          }
          fs.writeFile(
            `${__dirname}/usersScore/${name}-Score.txt`,
            `name: ${user.name}\nscore:${user.score}`
          );
        }
        console.clear();
      }
    }
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

main();
