//document.getElementById("content").innerHTML = " I am a p tag";
//document.write("I have been written to the document!");

// var myName = "Stefan";
// var myAge = 25;
// console.log(myName);
// console.log(myAge);
// var myDOB = "23rd May";
// var favFilms = ["Pulp Fiction", "Fight Club", "Cast Away"];
// var likesTea = true;
// var person = {
//     name: "Stefan",
//     age: 25,
//     city: "Veles",
//     street: "Hristo Tatarchev 6/3 - 15",
//     hobbies: ["Music", "Biking", "Reading"]
// }
// console.log(person.street);
// console.log(person.hobbies[2]);

// console.log(JSON.stringify(person));
// console.log(`${typeof myDOB}`)

// var result = 5 + 3;
// console.log(result);

// var numA = 5,
//     numB = 2,
//     result2 = numA + numB;
// console.log("result2 is " + result2);
// result2 = ++numA;
// console.log(result2);

// var x = 10;
// console.log(x);
// x = 5;
// console.log(x);
// x += 5;
// console.log(x);

// function funcName(param1, param2) {
//     return param1 + param2;
// }
// console.log(funcName(3,3));

// var toCelsius = (fahrenheit) =>{ 
//     return (5/9) * (fahrenheit - 32);
// }
// console.log(toCelsius(77));

// var carName = "Rover";

// function returnModel() {
//     var carModel = "25 GTI";
// }

// console.log(carName);

// var clicked = () => {
//     console.log("Clicked");
// }

// var age = 17;
// var passed = true;

// if(age >= 17 && !passed) {
//     console.log("Well Done!")
// } else if(age < 17) {
//     console.log("You are not old enough!");
// }
// else {
//     console.log("Sorry! You have not passed your test!");
// }

// var myNum = 5;
// while(myNum !== 10) {
//     myNum = ++myNum;
//     console.log(myNum);
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// var myStr = "This is WebsiteBytes\' JS crash course";
// console.log(myStr.search("JS"));
// console.log(myStr.indexOf("JS"));
// console.log(myStr.slice(8, 20));
// console.log(myStr.slice(-29, -17));
// console.log(myStr.replace("JS", "HTML"));
// console.log(myStr.charAt(5));
// console.log(myStr.split(""))
// console.log(myStr.split(" "))
// console.log(myStr.split("'"))

// var a = 3.14,
//     b = 3,
//     c = 123e4,
//     d = 123e-4;
// console.log(a , b ,c ,d);

// var a = "10",
//     b = "10";
// console.log(a + b);
// console.log(a - b);

// var a = 100 / "Javasript";
// console.log(a);
// console.log(isNaN(a));

// var hex = 0xFF;
// console.log(hex);

// var num = 100;
// console.log(num.toString());
// console.log(isNaN(num));
// console.log(num.toExponential());
// console.log(num.toFixed(5));

// console.log(Math.PI.toPrecision(3));
// console.log(Math.round(5.5));
// console.log(Math.floor(5.5)); //down
// console.log(Math.ceil(5.5));    //up
// console.log(Math.pow(5, 3)); //5 x 5 x 5 = 125   
// console.log(Math.sqrt(64));
// console.log(Math.min(0, 18, -5, 5, 6, 1));
// console.log(Math.max(0, 18, -5, 5, 6, 1));
// console.log((Math.random() * 10).toPrecision(3));
// console.log(Math.floor(Math.random() * 11));

var someNumbers = [32, 45, 19, 13, 79];
// console.log(someNumbers.sort());
// console.log(someNumbers.reverse());
// console.log(someNumbers.sort().reverse());
// delete someNumbers[0];
// console.log(someNumbers); //[empty, 45, 32, 19, 13] use shift!
// someNumbers.splice(2, 1, 199);
// console.log(someNumbers);
// someNumbers.splice(2, 1);
// console.log(someNumbers);
// var a = someNumbers.splice(2, 1);
// console.log(a);
// console.log(someNumbers);

// var someNumbers2 = [32, 6, 45, 19, 13, 79, 88];
// var otherNums = someNumbers.slice(3);
// console.log(someNumbers);
// console.log(otherNums);

// var bestDirectors = '{ "directors" :[' +
//         '{"firstName" :"Quentin", "lastName":"Tarantino"},'+
//         '{"firstName" :"Matt", "lastName":"Van"},'+
//         '{"firstName" :"Stan", "lastName":"Kub"} ]}';

// console.log(bestDirectors);
// var directorsObj = JSON.parse(bestDirectors);
// console.log(directorsObj);
// console.log(directorsObj.directors[0].firstName);

var myDay = new Date().getDate(); //0 Sunday 1 Monday 2 Tuesday.. 6 Saturday
console.log(myDay);
switch(myDay) {
    default: 
        console.log("It is a weekday :(");
        break;
    case 4:
    case 5:
        console.log("It is almost the weekend!");
        break;
    case 0:
        console.log("It is a Sunday!");
        break;
    case 7:
        console.log("It is a Wednesday!");
        break;
}