//meto way
var studenti = [
	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
];

function scores(arr) {
  var max = 0;
  var min = 10;
  var tot = 0;
  for (let i = 0; i < arr.length; i++) {
      tot += arr[i].prosek;
      if (arr[i].prosek > max) {
          max = arr[i].prosek;
      } else if (arr[i].prosek < min){
          min = arr[i].prosek;
      }
  }
  var avg = Math.round(tot / arr.length*100)/100;
  console.log(avg);
  for (let j = 0; j < arr.length; j++) {
      if (arr[j].prosek == max) {
          console.log(arr[j]);
      } else if (arr[j].prosek == min){
          console.log(arr[j]);
      }
  
}}

scores(studenti);

//Monika
// var niza = [
// 	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
// 	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
// 	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
// 	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
// 	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
// 	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
// 	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
// ];

// var maxObj = niza.reduce(function(max,obj) {
//   return obj.prosek > max.prosek ? obj : max;
// })

// console.log(maxObj);

// var minObj = niza.reduce(function(min,obj) {
//   return obj.prosek < min.prosek ? obj: min;
// });

// console.log(minObj);

// var average1 = niza.map(person => person.prosek);
// var average = average1.reduce((a,b) => {
//   return a + b;
// })

// var total = average/niza.length;
// console.log("Total is " + total);