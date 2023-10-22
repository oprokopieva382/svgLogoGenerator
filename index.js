const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape.js");

// function to check if it's a valid color keyword or a hexadecimal number
const validateColor = (input) => {
  const validColorKeyword =
    /^(red|green|blue|pink|purple|orange|yellow|black|white|gray|aqua|lime|olive|teal|silver|navy|maroon|fuchsia)$/i;
  const validHexColor = /^#([0-9A-Fa-f]{3}){1,2}$/i;

  if (validColorKeyword.test(input) || validHexColor.test(input)) {
    return true;
  } else {
    return "Please enter a valid color keyword or a hexadecimal number (e.g., 'red' or '#FF5733').";
  }
};

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
    validate: validateColor,
  },
  {
    type: "list",
    name: "shape",
    message: "What shape do you want?",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What shape color do you want? (❗use color keyword or a hexadecimal number)",
    validate: validateColor,
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

  //check text length
  text.length <= 3
    ? newShape.setText(text)
    : console.log("❗Only three or less characters");

  newShape.setColor(shapeColor);
  newShape.setTextColor(textColor);

  const svg = newShape.makeSvg();
  const path = "examples/logo.svg";
  fs.writeFile(path, svg, (err) => {
    err ? console.error(err) : console.log(`SVG file saved in ${path}`);
  });
});
