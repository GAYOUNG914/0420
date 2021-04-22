'use strict'
class Shape {
  constructor(width, height, color){//constructor(생성자)
    this.width = width;
    this.height = height;
    this.color = color;
  }
  inputDraw(a,b){//매개변수 추가 : 값을 받아와서 그리기
    console.log(a+','+b);
    // this.width = a;
    // this.height = b;
  }
  draw(){
    console.log('도형그리기');
  }
  getArea(){
    console.log( this.width * this.height )
  }
}

class Rectangle extends Shape{}

// let rect = new Rectangle(30,20,'blue');
// console.log(rect);
// rect.inputDraw(50,10);

class Triangle extends Shape{
  draw(){
    super.draw();
    console.log('삼각형 그리기');//오버라이딩 시 해당 함수내에서 부모함수 불어오기 가능 (super키워드 사용), 생성자와 달리 하단에 호출가능
  }
  getArea(){
    console.log( (this.width * this.height)/2 );
  }
}

// let tri = new Triangle(10,30,'green');
// console.log(tri);
// tri.draw();
// tri.getArea();

class Circle extends Shape{
  constructor(radius,color){
      super();
      this.radius = radius;
      this.color = color;
  }
  getArea(){
    console.log( Shape.circleRate * this.radius *this.radius );
  }
  rotate(){
    console.log('원형도형 회전하기');
  }
}


let rect = new Rectangle(30,20,'blue');
let tri = new Triangle(10,30,'green');
let circle = new Circle(10,'yellow');

rect.getArea()
console.log(rect.color)
rect.inputDraw(10,'도형그리기');
rect.draw();

/*
tri 너비 구하는 메서드 호출
색상을 출력
그림그리는 메서드 호출
*/













// let shapeObj = new Shape(250,300,'red');
// console.log(shapeObj.width+','+shapeObj.height+','+shapeObj.color);
// shapeObj.inputDraw(20,30);
// shapeObj.draw();
// shapeObj.getArea();
