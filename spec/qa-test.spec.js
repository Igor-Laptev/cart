const fs = require("fs");

const List = require("../Qa");

describe("List Class - q", () => {
  it("Вернет ли  массив с  вопросами, если themes = 1", () => {
    const list = new List(1);
    const questions = list.questions();
    expect(Array.isArray(questions)).toBe(true);
    expect(questions.length).toBeGreaterThan(0);
    expect(questions.length).toBe(5);
  });
});
describe("List Class - a", () => {
  it("Вернет ли  массив с  вопросами, если themes = 1", () => {
    const list = new List(1);
    const answers = list.answers();
    expect(Array.isArray(answers)).toBe(true);
    expect(answers.length).toBeGreaterThan(0);
    expect(answers.length).toBe(5);
  });
});
