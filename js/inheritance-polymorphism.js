/*
    1. Create a class called "Shape" whose constructor
       takes one parameter:
       - colour
       Assign "colour" to the instance of Shape with a 
       default value of "Transparent"
       Add a "type" property to "this" with a default
       value of "Shape"
    2. Add a method to "Shape" called "describe" that
       will console log out the following to the console:
       `A ${this.colour} ${this.type}`

       // Shape class -> - colour = "Transparent", type, describe

    3. Create a class called "Square" whose constructor
       takes 2 parameters (Square has to extend Shape):
       - colour
       - sideLength
       Call the super constructor with "colour"
       Assign "sideLength" to the instance of "Square"
       Assign "Square" to the "type" property

       // Square class -> colour, sideLength -> type = "Square"

    4. Add an "area" method to "Square" that will calculate
       and return the total area of the square.
       (Area of a square is: sideLength * sideLength)

       // area method
    
    5. Create a class called "Rectangle" whose constructor
       takes 3 parameters (Rectangle has to extend Shape):
       - colour
       - width
       - height
       Call the super constructor with "colour"
       Assign all of these to the instance of "Rectangle"
       Assign "Rectangle" to the "type" property
    6. Add an "area" method to "Rectangle" that will calculate
       and return the total area of the square.
       (Area of a rectangle is: width * height)
    7. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // ?
       console.log( rectangle.area() ); // ?
       for ( const shape of [square, rectangle] ) shape.describe();
       // A blue square
       // A red rectangle
*/


class Shape{
   type = "Shape";
   constructor(colour = "Transparent"){
      this.colour = colour;
      //this.type = "Shape";
   }

   describe(){
      //console.log(`A ${this.colour} ${this.type}`);
      return "Describe from shape class";
      //console.log("A " + this.colour + " " + this.type);
   }
}

class Square extends Shape{
   type = "Square";
   constructor(colour,sideLength){
      super(colour);
      this.sideLength = sideLength;
   }

   area(){
      return this.sideLength ** 2;
   }
}

class Rectangle extends Shape{
   type = "Rectangle";
   radius;
   constructor(colour,width,height){
      super(colour);
      this.width = width;
      this.height = height;
   }

   area(){
      return this.describe();
      //return this.width * this.height + this.colour;
   }
}

const square = new Square("blue", 5);       
const rectangle = new Rectangle("red", 5, 6);

console.log(square.type);

console.log(rectangle.radius);

rectangle.radius = rectangle.width * rectangle.height;

console.log(rectangle.radius);

rectangle.describe();

square.describe();

const shape = new Shape("Black");

console.log(shape);

const shape2 = new Shape();

console.log(shape2);


console.log(rectangle.area());

console.log(square.area());

console.log(typeof rectangle);
