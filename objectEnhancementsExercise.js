//Ryan Hutchings
//Unit 14.5: Object Enhancements Exercise

//Same keys and values ES5
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

//Same keys and values ES2015
/* Write an ES2015 Version */
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName
  }
}

// console.log(createInstructor('John', 'Wayne'));
// console.log(createInstructor('Mark', 'Twain'));


//Computed Property Names ES5
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//Computed Property Names ES2015
/* Write an ES2015 Version */
const favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: "That is my favorite!"
}

// console.log(instructor);


//Object Methods ES5
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

//Object Methods ES2015
/* Write an ES2015 Version */
const instructor1 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
}

// console.log(instructor1.sayHi());
// console.log(instructor1.sayBye());


//createAnimal function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    }
  };
}

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
console.log(d.bark());  //"Woooof!"


const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
console.log(s.bleet()); //"BAAAAaaaa"
