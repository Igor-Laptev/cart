const fs = require("fs").promises;
const User = require("./user.js");
const Quest = require("./Qa.js");
const readline = require("readline");
const { error } = require("console");

async function reg() {
  try {
    const rl = readline.Interface({
      input: process.stdin,
      output: process.stdout,
      prompt: "> ",
    });
    console.log("Привет, как тебя зовут? ");
  } catch {
    error;
  }
}
game();
