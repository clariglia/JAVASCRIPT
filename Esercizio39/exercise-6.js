class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(param){
    if(param instanceof Square){
      return param.side * param.side;
    }
    else if(param instanceof Circle){
      return param.radius * param.radius * Math.PI;
    }
    else if(param instanceof Rectangle){
      return param.width * param.height;
    }
    else{
      return `La figura non è disponibile`;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));