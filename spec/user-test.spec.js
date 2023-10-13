const User = require("../user"); // Импортируем класс User

describe("Проверка работы  User класса", () => {
  let user;

  beforeEach(() => {
    user = new User("Санечка", 500);
  });
  describe("Проверка работы constructor", () => {
    it("Корректное имя", () => {
      expect(user.name).toBe("Санечка"); // Проверяем, что имя установлено правильно
    });
    it("Имя не задано", () => {
      user = new User("");
      expect(user.name).toBe("");
    });
    it("Счет отображается корректно при переданнгом значении", () => {
      expect(user.score).toBe(500);
    });
    it("Счет отображается корректно при значении по умолчанию", () => {
      user = new User("Санечка");
      expect(user.score).toBe(0);
    });
  });

  describe("Проверка работы методов", () => {
    it("+100", () => {
      user.calculatorPLus();
      expect(user.score).toBe(600);
    });
    it("-100", () => {
      user.calculatorMinus();
      expect(user.score).toBe(400);
    });
  });
});
