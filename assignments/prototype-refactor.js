/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor (attributes) {
    this.name = attributes.name;
    this.isFlying = false;
  }
  takeOff () {
    this.isFlying = true
  }
  land () {
    this.isFlying = false
  }
}
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
  class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.stomach = [];
    }
    poop () {
      this.stomach = []
    }
    eat (food) {
      if (this.stomach.length < 10) {
        this.stomach.push(food);
      } else {
        return "Stomach full, please empty stomach with poop";
      }
    }
    toString () {
      return `${this.name}, ${this.age}`
    }
  }

  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */

  class Car {
    constructor (attributes) {
      this.model = attributes.model;
      this.milesPerGallon = attributes.milesPerGallon;
      this.tank = 0;
      this.odometer = 0;
    }
    fill (gallons) {
      this.tank += gallons
    }
    drive (distance) {
      let maxDistance = this.tank * this.milesPerGallon;
    if (maxDistance > distance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else {
      this.odometer += maxDistance;
      this.tank -= maxDistance / this.milesPerGallon; //this.tank = 0 works aswell
      return `I ran out of fuel at ${maxDistance}miles!`;
    }
    }
  }

  const MacLaren = new Car({
    model: 'DB9',
    milesPerGallon: 4,
  });
  
 MacLaren.fill(40)
  console.log(MacLaren.tank);
 MacLaren.drive(50)
  console.log(MacLaren.tank);
  
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
class Baby extends Person{
  constructor (attributes) {
    super(attributes)
    this.favoriteToy = attributes.favoriteToy;
    this.name = attributes.name; 
  }
  play () {
    return `${this.name} plays with her ${this.favoriteToy}.`
  }
}

const lucy = new Baby ({
  favoriteToy = 'trains',
  name: 'Lucy'
})

  
  /* 
    TASK 4
  
    In your own words explain the four principles for the "this" keyword below:
    1. Implicit Binding
    So when a variable is called inside something with local scope we can just replace the name
    of the element that holds the scope with this, for example in a function.
  
    example: 
  
    var workshop = {
      this.hey = 'hey'
      }
  
  this in this context is workshop
  
    2. Explicit Binding
      .call()
      .call() we need to give it 2 things, 1 the element that is replacing this, for example an object called person,
      and then arguments we want to pass in individually so for value 1 value 2 value 3 
      .call(person, 'Singing', 'Carpentry', 'Bakery'));
  
    3. .apply()
       .apply() is the same thing as .call but we past in the values using an array instead of writing them all SpeechRecognitionAlternative
      .apply(thisReplacement, arrayWithItems)
  
    4. .bind
    
    .bind will just store values for us untul we need them alter when the function is called
  .bind(person, 'Singing', 'Carpentry', 'Bakery');
  */
  
  ///////// END OF CHALLENGE /////////
  ///////// END OF CHALLENGE /////////
  ///////// END OF CHALLENGE /////////
  if (typeof exports !== "undefined") {
    module.exports = module.exports || {};
    if (Airplane) {
      module.exports.Airplane = Airplane;
    }
    if (Person) {
      module.exports.Person = Person;
    }
    if (Car) {
      module.exports.Car = Car;
    }
    if (Baby) {
      module.exports.Baby = Baby;
    }
  }
  