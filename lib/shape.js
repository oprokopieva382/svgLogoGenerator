class Shape {
  constructor() {
    this.color = "green";
  }
  setColor(color) {
    this.color = color;
  }

  makeSvg(text, textColor) {
    const svg = `
     <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
        ${this.render()}
      </svg>`;
      return svg
  }

  render() {
    throw new Error("Subclasses must implement the render method.");
  }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`;
  }
}
class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };