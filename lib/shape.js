class Shape {
  constructor() {
    this.color = "green";
    this.text = "jpg";
    this.textColor = "black";
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }

  makeSvg() {
    const svg = `
     <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.render()}
        <text x="50%" y="60%" font-size="60" text-anchor="middle" fill="${this.textColor}">
          ${this.text}
        </text>
    </svg>`;
    return svg;
  }

  render() {
    throw new Error("Subclasses must implement the render method.");
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="145, 2 270, 160 20, 160" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
