//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  function Animal(species, name, legs, color, food) {
    // this = {}
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
    //return this;
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  function Person(name, age, height, gender) {
    var man = {}
    man['name'] = name;
    man['age'] = age;
    man['height'] = height;
    man['gender'] = gender;
    return man;
  }


//Create a animal array and a person array.

  var Animals = [];
  var Person = [];


//Create two instances of Animal and push those into your animal array

  Animals.push(new Animal('narwhal', '7', 'blue', ['fish', 'magic']));
  Animals.push(new Animal('unicorn', '189', 'rainbow', ['cupcakes', 'sugarplums']));


//Create two instances of person and push those into your person array.

Persons.push(new Person('Bekah', '25', '66' 'F'));
Persons.push(new Person('Aaron', '23', '72' 'M'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function () {
    var randomFood = Math.floor(Math.random() * this.food.length);
    alert(this.name + ' ate ' + this.food[randomFood]);
  }


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
// NO - Persons are just of the Object Class, and are not given their own class.
// Because of this, we cannot run any prototype method on the Person class.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  Answer: A "new" object of that type is created.
  2) What's a good way to describe the keyword 'this'
  Answer: It is a reference to the object that is calling the function.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  Answer: No, because the objects created are just under the Object class, and are not given their own class.
  4) What happens if you forget to use 'new' when calling a constructor?
  Answer: If you forget, then you run the Constructor Function, but will not create any new object.
*/
