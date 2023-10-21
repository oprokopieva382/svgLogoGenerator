const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shape.js");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Type your characters (❗up to three characters only)",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What text color do you want? (❗use color keyword or a hexadecimal number)",
  },
  {
    type: "input",
    name: "shape",
    message: "What shape do you want?",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What shape color do you want? (❗use color keyword or a hexadecimal number)",
  },
];
inquirer.prompt(questions).then((res) => {
  const { text, textColor, shape, shapeColor } = res;

  let newShape;
  switch (shape) {
    case "circle":
      newShape = new Circle();
      break;
    case "square":
      newShape = new Square();
      break;
    case "triangle":
      newShape = new Triangle();
      break;
    default:
      console.log("Invalid shape selected");
      return;
  }
});
