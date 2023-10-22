const { Triangle, Circle, Square, Shape } = require("./shape.js");

describe("Shapes test", () => {
  //Triangle test
  describe("Triangle", () => {
    it("should set triangle shape with correct color", () => {
      const shape = new Triangle();
      shape.setColor("#2ECC71");
      expect(shape.render()).toEqual(
        `<polygon points="145, 2 270, 160 20, 160" fill="#2ECC71" />`
      );
    });
  });

  //Circle test
  describe("Circle", () => {
    it("should set circle shape with correct color", () => {
      const shape = new Circle();
      shape.setColor("#2ECC71");
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="90" fill="#2ECC71" />`
      );
    });
  });

  //Square test
  describe("Square", () => {
    it("should set circle shape with correct color", () => {
      const shape = new Square();
      shape.setColor("#2ECC71");
      expect(shape.render()).toEqual(
        `<rect x="50" y="10" width="200" height="200" fill="#2ECC71" />`
      );
    });
  });

  //Test to check instance of Shape class
  describe("Instantiate", () => {
    it("should be an instance of Shape class", () => {
      const shape = new Square();
      expect(shape).toBeInstanceOf(Shape);
    });
  });
});
