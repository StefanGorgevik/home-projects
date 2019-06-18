// Set a number and return his square 

var square = number => Math.pow(number, 2);
console.log(square(5)); 


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