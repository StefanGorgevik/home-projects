// Set a number and return his square 

var square = number => Math.pow(number, 2);
console.log(square(5)); 

// Print only the correct emails that finish with .com


var emails = ['germancutraro@hotmail.com', 'germancutraro', 'johndoe@gmail.com', 'notAndEmail', 'trucky@gmail'];
var foo = emails.filter((email) => email.includes('@') && email.endsWith('.com'));
console.log(foo);

// Print only people who are greater than 18 years old
var persons = [
    {name: 'John', age: 27},
    {name: 'Nicholas', age: 16},
    {name: 'Adney', age: 15},
    {name: 'Anton', age: 46},
  ];

var people = persons.filter(person => person.age > 18);
console.log(people);
   
//Print ONLY THE FIRST even number
var numbers3 = [5, 7, 33, 88, 92];
var even = numbers3.find(num => num % 2 === 0);
console.log(even);

// Get the sum of a array numbers
var numbers = [5, 5, 5, 10, 30];
var total = numbers.reduce((a, b) => {return a + b});
console.log(total);
// Get the greater number from a numbers array

var numbers1 = [122, 190, 395, 653, 29, 1, 65, 2312, 3333];
var total2 = numbers1.reduce( (prev, curr) => prev > curr ? prev : curr );
console.log(total2)

// Get the average of the array numbers 
//First way
var numbers2 = [2, 4, 60, 8, 10];
var average = numbers2.reduce( (a, b) => {  //a = 0; b = 2; a = 2;                                            //a = 2; b = 4; a = 6; b = 60; a =66...
    return a + b
  });
  var result = average / numbers2.length;
  console.log(result);
  //second way

// var zbir =0;
// for(var i = 0; i < numbers2.length; i++) {
//     zbir += numbers2[i];
// }
// var average = zbir / numbers2.length;
// console.log(average);