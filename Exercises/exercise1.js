// ARRAY 1
var texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
  // Part 1 - Find all users older than 24
  
//   texasss.forEach(function(ppl){
//     if(ppl.age > 24) {
//         console.log(ppl.name);
//     }
//   })

  // Part 2 - Find the total age of all users
//   var totalAge = 0;
//   for(var i = 0; i < texasss.length; i++) {
//     totalAge += texasss[i].age;
    
//   }
//console.log(totalAge);

  // Part 3 - List all female coders
  
//   texasss.forEach(function(gen) {
//     if(gen.gender === "f") {
//         console.log(gen.name);
//     }
//   })
  
  // ARRAY 2
    var newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]
  
  // Part 1 - List all users in US in ascending order
//   newieyork.forEach(function(b) {
//     if(b.us !== false) {
//         console.log(b.name);
//     }
//   })
      


  // Part 2 - Sort all users by age
//   newieyork.sort((a, b) => (a.age > b.age) ? 1 : -1);
//   console.log(newieyork);
 

  // Part 3 -  List all female coders
//   newieyork.forEach(function(gen) {
//     if(gen.gender === "f") {
//         console.log(gen.name);
//     }
//   })
  
  
  // ARRAY 3
  var vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25
//   var totalAge = 0;
    // for(var i = 0; i < vegzas.length; i++) {
    //     if(vegzas[i].age < 25 && vegzas[i].gender === "m") {
    //   totalAge += vegzas[i].age;
    // }
    // }

//   vegzas.forEach(function(c) {
//       if(c.age < 25 && c.gender === "m") {
//         totalAge += c.age;
//       }    
//   })
//   console.log(totalAge);
  // Part 2 - List all male coders over 30

//   vegzas.forEach(function(c) {
//     if(c.age > 30 && c.gender === "m") {
//         console.log(c.name);
//     }    
// })


  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
function sumAge(array1,array2,array3){
    var totalAge = 0;
    array1.forEach(function(c){
          totalAge += c.age;
        });       
    array2.forEach(function(c){
          totalAge += c.age;
        });       
    array3.forEach(function(c){
          totalAge += c.age;
        });  
    return totalAge;
}

sumAge(texasss, newieyork, vegzas);
    
    



 