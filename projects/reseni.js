

// // 1.Napisete program koj sto ima dve variabli (promenlivi) i ni vrakja koj broj e pogolem od niv. 
// //Vo konzolata treba da pisuva Primer: -> Brojot 5 e pogolem od brojot 3;
// // var num1 = 5; 
// // var num2 = -5;

// // if(num1 > num2) {
// // 	console.log(`${num1} is larger than ${num2}!`);
// // }else if(num2 > num1){
// // 	console.log(`${num2} is larger than ${num1}!`);
// // }else{
// // 	console.log(`${num1} and ${num2} are equal!`);
// // }

// // 2.Napisete program koj sto vrakja text (vo konzolata) koj sto vika: Hello World vo cetiri jazici. 
// //Angliski, Francuski, Spanski, Germanski,vo zavisnost od izbraniot jazik vo variablata. 
// //Primer -> var lang = "spain" --> Rezultatot treba da bide na spanski.
// // var lang = "German";
// // lang = lang.toLowerCase();
// // switch(lang) {
// // 	case "spanish": 
// // 		console.log("Hola!");
// // 		break;
// // 	case "english": 
// // 		console.log("Hello!");
// // 		break;
// // 	case "macedonian": 
// // 		console.log("Zdravo!");
// // 		break;
// // 	case "german": 
// // 		console.log("Guten tag!");
// // 		break;
// // 	default:
// // 		console.log("We don't support that language!");
// // }

// // 3.Napisete program koj sto vi vrakja rezultat dali moze da si kupite nov laptop.
// // Iminjata na laptopite so nivnite ceni se: Macbook, Macbook Pro i Macbook Air. 
// //Cenata na Macbook = $500, na Macbook Pro = $900 i na Macbook Air = $600; Treba da cuvate budzet 
// //(odnosno vasi pari vo variabla. Primer -> var budzet = "$500");

// // var budget = 900;
// // var macbook = 500;
// // var macbookAir = 600;
// // var macbookPro = 900;
// // if(budget >= 900) {
// // 	console.log("Your budget is big enough so that you can choose!");
// // }else if(budget < 500){
// // 	console.log("You can't afford any laptop!");
// // }else if(budget >= 500 && budget < 600) {
// // 	console.log("You can only afford the Macbook for " + macbook + " dollars!");
// // }else if(budget >= 500 && budget < 900) {
// // 	console.log(`You can afford the Macbook laptop for ${macbook} dollars and the MacbookAir for ${macbookAir} dollars!`);
// // }

// // 4.Напишете циклус за пресметување на сите парни броеви во еден опсег кој што ќе го внесете од prompt.
// //**** */i e num1 preku prompt, 100 e num2****
// // var sum = 0;
// // for(var i = 1; i <= 20; i++) {
// // 	if(i % 2 === 0) {
// // 		sum += i;
// // 	}
// // }
// // console.log(sum);

// // 5.Напишете ги сите карти од еден шпил (1-срце, 1-детелина,1-баклава, 1-лист).

// // var num = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
// // var type = ["Srce", "Detelina", "Baklava", "List"];

// // for(var broj in num) {
// // 	for(var tip in type) {
// // 		console.log(num[broj] + " " + type[tip]);
// // 	}
// // }

// // 6.Креирајте објект кој во себе ќе има 7 својства со барем 2 низи
// // var person = {
// //     name: "Stefan",
// //     lastname: "Gorgevik",
// //     age: 25,
// //     city: "Veles",
// //     country: "Macedonia",
// //     skills: ["English", "Computers", "Music"],
// //     hobbies: ["Exercising", "Hiking", "Biking", "Gaming"]
// // };

// // console.log(person.skills[0] + " " + person.skills[2])
// // console.log(person.hobbies[0] + " " + person.hobbies[3])


// // //-Од тие две низи извлечете ги и прикажете ги првите и последните елементи


// // 7.Направете низа од имиња и прикажете ги оние чија должина е 5.

// // var names = ["Filip", "Stefan", "Elena", "Stojan", "Aleksandra", "Milos", "Dimitar", "Ljube","Darko", "Petar", "Slavica", "Mile", "Sanja"];
// // var fiveLetterNames = [];
// // for(var i in names) {
// //     if(names[i].length === 5) {
// //         fiveLetterNames.push(names[i]);
// //     }
// // }
// // console.log(fiveLetterNames);
// // 8.Направете низа чија големина ќе ја внесете преку prompt. Сите елементи од таа низа внесете ги преку
// // prompt и прикажете ја подредена.

// // 9.Направете низа библиотека кој ќе содржи елементи кои се објекти. Тие објекти треба да бидат книги кои ќе имаат автор, наслов, и дали е прочитана или не (true/false)
// // -Прикажете кои книги се прочитани а потоа кои не се прочитани.

// // console.log("With For Loop");
// // console.log("*****************************");

// 	// var library = [
// 	// 	{
// 	// 		title: "The Big Sleep",
// 	// 		author: "Raymond Chandler",
// 	// 		read: true
// 	// 	},

// 	// 	{
// 	// 		title: "American Heroin",
// 	// 		author: "Melissa Scrivner Love",
// 	// 		read: false
// 	// 	},		

// 	// 	{
// 	// 		title: "The Reckoning",
// 	// 		author: "John Grisham",
// 	// 		read: false
// 	// 	},

// 	// 	{
// 	// 		title: "The Chalk Man",
// 	// 		author: "C. J. Tudor",
// 	// 		read: true
// 	// 	}
// 	// ];

// //with for loop!
// // for(var i = 0; i < library.length; i++) {
// //     if(library[i].read){
// //         console.log(`${library[i].title} is read!`);
// //     }
// //     else{
// //         console.log(`${library[i].title} is not read!`);
// //     }
// // }


// //  console.log("*****************************");
// // 	console.log("Ending of for loop!");
// // 	console.log("*****************************");


// // //With forEach loop

// // library.forEach(function(book) {
// //     if(book.read) {
// //         console.log(book.title + " is read!");
// //     }else{
// //         console.log(book.title + " is not read!");
// //     }
// // });


// //10. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
// //Sample numbers: 0, -1, 4

// // var numbers = [-200 , 152, 10, -5, ,38, 1132, -2, -1235, -6, 0, -1, 5];
// // numbers = numbers.sort((a,b ) => { return a - b});
// // console.log(numbers);

// //11. Write a JavaScript conditional statement to find the largest of five numbers. 
// //Display an alert box to show the result. Sample numbers : -5, -2, -6, 0, -1 */

// // var numbers = [-5, -2, -6, 0, -1, 5];
// // var largest = numbers.sort((a, b) => { return a > b})[numbers.length-1];
// // console.log(largest);

// //12. Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd,
// // and report that to the screen (e.g. "2 is even").
// // for(var i = 0; i < 21; i++) {
// //     if(i % 2 === 0) {
// //         console.log(i + " is even!");
// //     }
// //     else{
// //         console.log(`${i} is odd!`);
// //     }
// // }

// //13. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, 
// //it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// // for(var i = 0; i <= 10; i++) {
// // 	var result = i * 9;
// // 	console.log(`${i} * 9 = ${result}`);
// // }

// //14. Isprintaj gi site 4-cifreni broevi 0d 1000 do 1100, cij zbir na cifrite e neparen broj


// // for(var i = 1000; i < 1100; i++) {
// // var sum = 0;
// // 	i = i.toString();
// // 	for(let j = 0; j < i.length; j++){
// // 		sum = sum + Number(i[j]);
// // 	}
// // 	if(sum % 2 !== 0) {
// // 		console.log(`${i} = ${sum}`);
// // 	}
// //}


// //15.//Isprintaj gi site 2-cifreni broevi chij zbir na cifrite e paren
// //Izbroj kolku se
// //Ispecati kolku takvi ima

// // var sum;
// // var count = 0;
// // for(var i = 10; i < 100; i++) {
// // 	sum = 0;
// // 	i = i.toString();
// // 	for(var j = 0; j < i.length; j++){
// // 		sum += Number(i[j]);
// // 	}
// // 	if(sum % 2 === 0) {
// // 		count++;
// // 		console.log(`Sum is: ${sum}`);
// // 	}
// // }
// // console.log(`Count is: ${count}`);


// //15. Make a function to print the fibbonaci scale(up to 1000)

// // function fib(a,b) {
// //     if(a > 600){
// //         return a + b;
// //     }
// //     console.log(a + b);
// //     return fib(b, a + b);
// // }
// // fib(0,1);

// //15. Make this pattern:  1 2 4 8 16 32 64 128

// // var i = 1;
// // while(i < 16) {
// // 	var result = i * 2;
// // 	i*=2;
// // }

// //16. Make this pattern: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// // var i = 0;
// // var repeat = 1;
// // while(i < 5) {
// // 	console.log(i);
// // 	i++;
// // 	if(i > 4) {
// // 		repeat++;
// // 		i = 0;
// // 	}
// // 	if(repeat > 3) {
// // 		break;
// // 	}
// // }


// //17. Make this pattern: 1 1 1 2 2 2 3 3 3 4 4 4

// // for(var i = 1; i < 5; i++) {
// // 	var repeat = 0;
// // 	while(repeat < 3) {
// // 		console.log(i);
// // 		repeat++;
// // 	}
// // 	console.log(" ");
// // }
// //18. Make this pattern: 3 6 9 12 15

// // var i = 3;
// // while(i < 16) {
// // 	console.log(i);
// // 	i+= 3;
// // }


// //19. Make this pattern: 9 8 7 6 5 4 3 2 1 0
// // for(var i = 9; i > -1; i--){
// // 	console.log(i);
// // }

// //20. Create a program where the last 3 digits of a number are added together		
// // var num = 81111113521;
// // num = num.toString();
// // var ind = num.length - 3;
// // var sum = 0;
// // for(var i = ind; i < num.length; i++){
// // 	sum += Number(num[i]);
// // }
// //  console.log(sum);
// //21. Check the length of a name, and tell if the length is even or odd!

// // var name = "Stefan";

// // name.length % 2 === 0 ? console.log("Even!") : console.log("Odd!");

// // if(name.length % 2 === 0) {
// // 	console.log("Even!");
// // } else {
// // 	console.log("Odd!");
// // }


// //22. Print odd and even numbers with prompt and save them in a separate array.
// // var numbers = [-24, 88, 6, 3, 1, 2, 20, 9, 99, 198, 33, 27 -40, -3 , -5, -6];
// // var even = [];
// // var odd = [];
// // for(var i = 0; i < numbers.length; i++) {
// // 	numbers[i] % 2 === 0 ? even.push(numbers[i]) : odd.push(numbers[i]);
// // }
// // even.sort((a, b) => {return a -b });
// // odd.sort((a, b) => {return a - b });
// // console.log(`even ${even}       odd ${odd}`);



// //23. Print all numbers between -10 and 19;
//         // for(var i = -10; i <= 19; i++) {
//         //     console.log(i);
//         // }

// //24. Print all even numbers between 10 and 40

// // for(var i = 10; i < 41; i++) {
// //     if(i % 2 === 0) {
// //         console.log(i);
// //     }
// // }


// //25. Print all odd numbers between 300 and 333 
// // var i = 300;
// // while(i <= 333) {
// //     if(i % 2 !== 0) {
// //         console.log(i);
// //     }
// //     i++;
// // }

// //26. Print all numbers dividible by 3 and 5 between 10 and 50.

// // for(var i = 10; i <= 50; i++) {
// //     if(i % 3 === 0 && i % 5 === 0) {
// //         console.log(i);
// //     }
// // }

// //27. Make a function factorial, 3 ways!
// // var result = 1;
// // var num =8;
// // for(var i = 2; i <= num; i++) {
// //     result *= i;
// // }
// // console.log(result);

// //FACTORIAL VERSION 2

// // var result = 1; 
// // var num = 4;
// // for(var i = num; i > 1; i--) {
// //     result *= i;
// // }
// // console.log(result);

// //Function factorial
// // var factorial = (num) => {
// //     var result = 1;
// //     for(var i = 2; i <= num; i++) {
// //         result *= i;
// //     }
// //     return result;
// // }
// // console.log(factorial(4));

// //28. Make a day on earth calculator!

// // var daysInAYear = 365; 
// // var birthYear = 1994;
// // var currentYear = 2019;
// // var daysOnEarth = daysInAYear * (currentYear - birthYear);
// // console.log(daysOnEarth);

// //29. Make a todo list program, where a input will ask you to "quit" , "list", "new".
// 	// 127.0.0.1:8080/todo

// //30. Make a isEven and kebabToSnake function!

// // function isEven(num) {
// // 	num % 2 === 0 ? console.log(`${num} is even!`) : console.log(`${num} is odd!`);
// // }
// // isEven(5);

// // function kebabToSnake(str) {
// // 	str = str.replace(/-/g, "_");
// // 	return str;
// // }
// // console.log(kebabToSnake("hello-world"));
// // console.log(kebabToSnake("zdravo-kako-si"));

// //31. Using fetch, make a table that will generate the following data: http://dummy.restapiexample.com/api/v1/employees

// //32. Make these functions areaTriangle, areaRectangle, areaCircle
// // var areaTriangle = (base, height) => {
// // 	var result = (base * height) / 2;
// // 	return result;
// // }
// // console.log(areaTriangle(10,10));

// // var areaRectangle = (base, height) => {
// // 	var result = base * height;
// // 	return result;
// // }
// // console.log(areaRectangle(10,10));

// // var areaCircle = (pi, rad) => {
// // 	let result = pi * (rad * rad);
// // 	return result;
// // }

// // console.log(areaCircle(3.14, 20));

// //33. Make the "guess the secret number" game

// //34. Using classes make a class male and female and have a method to tell if they can they.
// // They can date only if they are in the range of 5 years.

// //35. Make a calculator on your page!
// //http://127.0.0.1:8080/calculator

// //36./Од дадената низа, треба да се отпечати име и презиме на студентот со највисок просек,
// //студентот со најнизок просек, и средна вредност (просек) на целата генерација (сите студенти)

// // var people = [
// // 	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
// // 	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
// // 	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
// // 	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
// // 	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
// // 	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
// // 	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
// // ];

// //37. Create a file with lorem ipsum text inside and read it with node. Print how many characters(including 
// // signs and empty spaces), how many letters are there, how many sentences, words, and words with
// //7 letters, more than 7, and less than 7 characters!

// //38. Make a calculator using the url

// //39. Finish the last homework from semos (node js!)

// //40. Ddetermine the corresponding grade of each student!
// /*
// Range	  Grade
// 50  - 60    F
// 60	- 70	D
// 70	- 80	C
// 80	- 90	B
// 90 - 100	A
// */

// // var stud = [
// // 	{
// // 		name: "David",
// // 		mark: 80
// // 	},
// // 	{
// // 		name: "Vinoth",
// // 		mark: 77
// // 	},
// // 	{
// // 		name: "Divya",
// // 		mark: 88
// // 	},
// // 	{
// // 		name: "Ishitha",
// // 		mark: 95
// // 	},
// // 	{
// // 		name: "Thomas",
// // 		mark: 68
// // 	}
// // ];

// // for(var i = 0; i < stud.length; i++) {
// // 	if(stud[i].mark >= 90) {
// // 		console.log(`${stud[i].name} has an A!`);
// // 	}else if(stud[i].mark < 90 && stud[i].mark >= 80) {
// // 		console.log(`${stud[i].name} has a B!`);
// // 	}else if(stud[i].mark < 80 && stud[i].mark >= 70) {
// // 		console.log(`${stud[i].name} has a C!`);
// // 	}else if(stud[i].mark < 70 && stud[i].mark >= 60) {
// // 		console.log(`${stud[i].name} has a D!`);
// // 	}else if(stud[i].mark < 60) {
// // 		console.log(`${stud[i].name} has an F!`);
// // 	}
// // };

// //41. Write a JavaScript program to construct the following pattern, using a nested for loop. 

// // *  
// // * *  
// // * * *  
// // * * * *  
// // * * * * * 
// // * * * * * *

// // var star = "*";
// // for(var i = 0; i < 7; i++) {
// // 	console.log(star);
// // 	star += "*";
// // }


// //42.Given an array(arr), numbers n1, n2, find how many times n1 and n2 occur in the array

// var arr = [1, 5, 1, 1, 5, 2, 4, 5, 2, 3, 2, 4, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 5, 1, 4, 2, 4, 2, 3, 2, 4, 1];

// function findOccurences(arr, n1, n2) {
//     var firstOcc = 0;
//     var secondOcc = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === n1) {
//             firstOcc++;
//         }
//         if(arr[i] === n2) {
//             secondOcc++;
//         }
//     }
//     return [firstOcc, secondOcc];
// }

// // console.log(findOccurences(arr, 1, 3));

// //43. Given two phrases, check which words are missing.

// var s = "I am using hackerrank to improve performance";
// var t = "am hackerrank improve";

// const findWords = (s, t) => {
//     var first = s.split(" ");
//     var second = t.split(" ");
//     var words = [];
//     for (var i = 0, j = 0; i <= first.length; i++) {
//         if (first[i] !== second[j]) {
//             words.push(first[i]);
//         } else {
//             j++;
//         }
//     }
//     return words;
// }

// // console.log(findWords(s,t));

// //44. Compare triplets, two arrays, and check which index integer is bigger. For example, if a[0] is > than b[0]
// // first should be 1; Return an array that tells which array has bigger numbers. Exmp: [2,1] 
// var a = [5, 1, 6, 8];
// var b = [3, 2, 4, 8];
// function compareTriplets(a, b) {
//     var first = 0;
//     var second = 0;
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             first++;
//         } else if (b[i] > a[i]) {
//             second++;
//         }
//     }
//     return [first, second];
// }

// // console.log(compareTriplets(a,b))

// //45. Given an array, (a), and a number (d), rotate the elements of the array (d) times to the left.
// //example: 1 ,2, 3, 4, 5 (d = 2) => 2, 3, 4, 05, 1 => 3, 4, 5, 1, 2
// var a = [1, 2, 3, 4, 5];
// var d = 2;

// function rotLeft(a, d) {
//     for (var i = 1; i <= d; i++) {
//         a.push(a.shift());
//     }
//     return a;
// }

// // console.log(rotLeft(a, d));

// //46. Given an array and a number, search for the number within the array, if you find it return "YES", else return "NO";

// var numArray = [3, 5, 11, -2, 2];
// var numToFind = -2;

// function findTheNumber(arr, num) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return "YES";
//         }
//     }
//     return "NO";
// }

// // console.log(findTheNumber(numArray, numToFind));

// //47.Given two numbers, loop through the range of these numbers and find the odd numbers.

// function searchOdd(k, j) {
//     var oddNums = [];
//     for (var i = k; i <= j; i++) {
//         if (i % 2 === 1) {
//             oddNums.push(i);
//         }
//     }
//     return oddNums;
// }

// // console.log(searchOdd(1, 22));

// //48.Given a number, add a dash after every even number;

// var numToDash = 236457916;

// function addDash(num) {
//     var str = num.toString();
//     const result = [];
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] % 2 === 0) {
//             result.push(str[i], '-');
//         } else {
//             result.push(str[i]);
//         }
//     }
//     return result.join('');
// }

// // console.log(addDash(numToDash));

// //49. Given two arrays, one sorted(array1) and one distinct(array2), find the common elements.

// var array1 = [1, 5, 15, 20, 32, 37];
// var array2 = [2, 5, 13, 30, 32, 35];
// function findCommonElements(array1, array2) {
//     var sortedArr = [];
//     for (var i = 0; i < array1.length; i++) {
//         if (array1[i] === array2[i]) {
//             console.log(array1[i], array2[i])
//             sortedArr.push(array1[i]);
//         }
//     }
//     return sortedArr;
// }
// // console.log(findCommonElements(array1, array2));

// //50. Given five positive integers, find the minimum and maximum values by summing exactly four of the five integers.
// //return [max, min].For example, arr is [1 3 5 7 9] minimum sum is 16 and  maximum sum is 24. We would print 16 24

// var arrayMinMax = [1, 9, 3, 5, 7];

// function minMax(arr) {
//     arr = arr.sort();
//     var max = 0;
//     var min = 0;
//     for(var i = 0; i < arr.length; i++) {
//         if(i !== arr.length - 1) {
//             min += arr[i];
//         } 
//         if(i !== 0) {
//             max += arr[i];
//         }
//     }
//    return [min, max]
// }
// // console.log(minMax(arrayMinMax));

// //51. Have the function FirstReverse(str) take the str parameter being passed and return the string in 
// //reversed order. For example: if the input string is "Hello World and Coders" then your program should 
// //return the string sredoC dna dlroW olleH. 





// <!-- RESHENI -->


// 1.Napisete program koj sto ima dve variabli (promenlivi) i ni vrakja koj broj e pogolem od niv. 
// Vo konzolata treba da pisuva Primer: -> Brojot 5 e pogolem od brojot 3;
var r = 6;
var p = 4;
function checkBigger(a, b) {
    if (a > b) {
        return console.log(`Number ${a} is bigger than ${b}`);
    } else if (b > a) {
        return console.log(`Number ${b} is bigger than ${a}`);
    } else {
        return console.log('they are equal');
    }
}
// checkBigger(r,p)

// 2.Napisete program koj sto vrakja text (vo konzolata) koj sto vika: Hello World vo cetiri jazici. 
//Angliski, Francuski, Spanski, Germanski,vo zavisnost od izbraniot jazik vo variablata. 
//Primer -> var lang = "spain" --> Rezultatot treba da bide na spanski.


function askLanguage() {
    var ques = prompt('Enter a language!');
    switch (ques) {
        case "English": {
            return console.log("Hello");
            break;
        }
        case "Spanish": {
            return console.log("Hola");
            break;
        }
        case "German": {
            return console.log("Guten tag")
            break;
        }
        case "Russian": {
            return console.log("Spasiva")
            break;
        }
        default: {
            ques = prompt("We dont support that language. Choose between English, German, Russian and Spanish!")
            return;
        }
    }
}
// askLanguage();

// 3.Napisete program koj sto vi vrakja rezultat dali moze da si kupite nov laptop.
// Iminjata na laptopite so nivnite ceni se: Macbook, Macbook Pro i Macbook Air. 
//Cenata na Macbook = $500, na Macbook Pro = $900 i na Macbook Air = $600; Treba da cuvate budzet (odnosno vasi pari vo variabla. Primer -> var budzet = "$500");


// 4.Напишете циклус за пресметување на сите парни броеви во еден опсег кој што ќе го внесете од prompt.
const askFirstNum = () => {
    var first = prompt("First number to get even numbers");
    return first;
};
const askSecNum = () => {
    var sec = prompt("Second number to get even numbers");
    return sec;
};

const evenNumbers = () => {
    var first = askFirstNum();
    var second = askSecNum();
    var evenArr = [];
    for (var i = first; i <= second; i++) {
        if (i % 2 === 0) {
            evenArr.push(i);
        }
    }
    return console.log(evenArr);
}

//evenNumbers();

// 5.Напишете ги сите карти од еден шпил (1-срце, 1-детелина,1-баклава, 1-лист).

var num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
var type = ["Srce", "Detelina", "Baklava", "List"];

const shuffleCards = (num, type) => {
    let shuffled = [];
    for (let broj in num) {
        for (let tip in type) {
            shuffled.push(num[broj] + "-" + type[tip]);
        }
    }
    return console.log(shuffled);
}

//shuffleCards(num,type);


// 6.Креирајте објект кој во себе ќе има 7 својства со барем 2 низи


// //-Од тие две низи извлечете ги и прикажете ги првите и последните елементи


// 7.Направете низа од имиња и прикажете ги оние чија должина е 5.

var names = ["Filip", "Stefan", "Elena", "Stojan", "Aleksandra", "Milos", "Dimitar", "Ljube", "Darko", "Petar", "Slavica", "Mile", "Sanja"];

const getFiveLetterNames = (names) => {
    var fiveLetterNames = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length === 5) {
            fiveLetterNames.push(names[i])
        }
    }
    return console.log(fiveLetterNames);
}
// getFiveLetterNames(names);

// 8.Направете низа чија големина ќе ја внесете преку prompt. Сите елементи од таа низа внесете ги преку 
//prompt и прикажете ја подредена.



// 9.Направете низа библиотека кој ќе содржи елементи кои се објекти. Тие објекти треба да бидат книги кои ќе имаат автор, наслов, и дали е прочитана или не (true/false)
// -Прикажете кои книги се прочитани а потоа кои не се прочитани.

// console.log("With For Loop");
// console.log("*****************************");

// 	var library = [
// 		{
// 			title: "The Big Sleep",
// 			author: "Raymond Chandler",
// 			read: true
// 		},

// 		{
// 			title: "American Heroin",
// 			author: "Melissa Scrivner Love",
// 			read: false
// 		},		

// 		{
// 			title: "The Reckoning",
// 			author: "John Grisham",
// 			read: false
// 		},

// 		{
// 			title: "The Chalk Man",
// 			author: "C. J. Tudor",
// 			read: true
// 		}
// 	]

//with for loop!


//     console.log("*****************************");
// 	console.log("Ending of for loop!");
// 	console.log("*****************************");


// //With forEach loop


//10. Write a JavaScript conditional statement to sort three numbers.
// Display an alert box to show the result. Sample numbers: 0, -1, 4


//11. Write a JavaScript conditional statement to find the largest of five numbers. 
//Display an alert box to show the result. Sample numbers : -5, -2, -6, 0, -1 */

//12. Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number 
//is even or odd, and report that to the screen (e.g. "2 is even").

//13. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

//14. The Grade Assigner

//15. Make a function to print the fibbonaci scale(up to 1000)

//15. Make this pattern:  1 2 4 8 16 32 64 128

//16. Make this pattern: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// var i = 0;
// var repeat = 0;
// while(i < 5) {
//     console.log(i);
//     i++;
//     if(i > 4) {
//         repeat++; 
//         i = 0;
//     } 
//     if(repeat > 2) {
//         break;
//     }
// }

//17. Make this pattern: 1 1 1 2 2 2 3 3 3 4 4 4

// for(var i = 1; i < 5; i++) {
//     var repeat = 0;
//     while(repeat < 3) {
//         console.log(i + " ");
//         repeat++;
//     }
// }

//18. Make this pattern: 3 6 9 12 15

// var i = 3;
// while(i < 16) {
//     console.log(i);
//     i+=3;
// }

//19. Make this pattern: 9 8 7 6 5 4 3 2 1 0
// for(var i = 9; i >= 0; i--) {
//     console.log( i)
// }


//20. Create a program where the last 3 digits of a number are added together		



//21. Check the length of a name, and tell if the length is even or odd!
function checkNameLength() {
    var name = prompt("Enter your name to check the length");
    if (name.length % 2 === 0) {
        return console.log("Your name's length is even!");
    } else {
        return console.log("Your name's length is odd!")
    }
}

// checkNameLength()


//22. Print odd and even numbers with prompt and save them in a separate array.
var checkOddOrEven = () => {
    var start = prompt("Enter your starting number");
    var end = prompt("Enter your ending number");
    var odds = [];
    var evens = [];
    for (var i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evens.push(i);
        } else {
            odds.push(i);
        }
    }
    return console.log(`Odd numbers are ${odds}, and even numbers are ${evens}`)
}
// checkOddOrEven()

//23. Print all numbers between -10 and 19;

// for(var i = -10; i <= 19; i++) {
//     console.log(i);
// }

//24. Print all even numbers between 10 and 40
// for(var i = 10; i <= 40; i++) {
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

//25. Print all odd numbers between 300 and 333 
// var num = 300;
// while(num <= 333) {
//     if(num % 2 !== 0) {
//         console.log(num)
//     }
//     num++;
// }

//26. Print all numbers dividible by 3 and 5 between 10 and 50.

// for(var i = 10; i < 51; i++){
//     if(i % 3 === 0 & i % 5 === 0) {
//         console.log(i);
//     }
// }

//27. Make a function factorial, 3 ways!
// var result = 1;
// for(var i = 2; i <= 8; i++){
//     result *= i;
// }
// console.log(result)

//Function factorial

//FUNCTION FACTORIAL VERSION 2

//28. Make a day on earth calculator!

//29. Make a todo list program, where a prompt will ask you to "quit" , "list", "new".

//30. Make a isEven and kebabToSnake function!

//31. Using fetch, make a table that will generate the following data: http://dummy.restapiexample.com/api/v1/employees

//32. Make these functions areaTriangle, areaRectangle, areaCircle

//33. Make the "guess the secret number" game

//34. Using classes make a class male and female and have a method to tell if they can they.
// They can date only if they are in the range of 5 years.

//35. Make a calculator on your page!

//36./Од дадената низа, треба да се отпечати име и презиме на студентот со највисок просек,
//студентот со најнизок просек, и средна вредност (просек) на целата генерација (сите студенти)

// var people = [
// 	{ime: "Pero", prezime:"Perovski", prosek: 6.2},
// 	{ime: "Janko", prezime:"Jankovski", prosek: 7.1},
// 	{ime: "Stanko", prezime:"Stankovski", prosek: 8.3},
// 	{ime: "Petko", prezime:"Petkovski", prosek: 9.81},
// 	{ime: "Ivana", prezime:"Ivanovska", prosek: 6},
// 	{ime: "Gordana", prezime:"Gordanovska", prosek: 6.1},
// 	{ime: "Cveta", prezime:"Cvetkoska", prosek: 9.2}
// ];

//37. Create a file with lorem ipsum text inside and read it with node. Print how many characters(including 
// signs and empty spaces), how many letters are there, how many sentences, words, and words with
//7 letters, more than 7, and less than 7 characters!

//38. Make a calculator using the url

//39. Finish the last homework from semos (node js!)

//40. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine 
//the corresponding grade.

/*Student Name	Marks
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68
The grades are computed as follows :

Range	  Grade
<60			F
<70			D
<80			C
<90			B
<100		A
*/

//41. Write a JavaScript program to construct the following pattern, using a nested for loop. 

// *  
// * *  
// * * *  
// * * * *  
// * * * * * */

//42.Given an array(arr), numbers n1, n2, find how many times n1 and n2 occur in the array

var arr = [1, 5, 1, 1, 5, 2, 4, 5, 2, 3, 2, 4, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 5, 1, 4, 2, 4, 2, 3, 2, 4, 1];

function findOccurences(arr, n1, n2) {
    var firstOcc = 0;
    var secondOcc = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === n1) {
            firstOcc++;
        }
        if(arr[i] === n2) {
            secondOcc++;
        }
    }
    return [firstOcc, secondOcc];
}

// console.log(findOccurences(arr, 1, 3));

//43. Given two phrases, check which words are missing.

var s = "I am using hackerrank to improve performance";
var t = "am hackerrank improve";

const findWords = (s, t) => {
    var first = s.split(" ");
    var second = t.split(" ");
    var words = [];
    for (var i = 0, j = 0; i <= first.length; i++) {
        if (first[i] !== second[j]) {
            words.push(first[i]);
        } else {
            j++;
        }
    }
    return words;
}

// console.log(findWords(s,t));

//44. Compare triplets, two arrays, and check which index integer is bigger. For example, if a[0] is > than b[0]
// first should be 1; Return an array that tells which array has bigger numbers. Exmp: [2,1] 
var a = [5, 1, 6, 8];
var b = [3, 2, 4, 8];
function compareTriplets(a, b) {
    var first = 0;
    var second = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            first++;
        } else if (b[i] > a[i]) {
            second++;
        }
    }
    return [first, second];
}

// console.log(compareTriplets(a,b))

//45. Given an array, (a), and a number (d), rotate the elements of the array (d) times to the left.
//example: 1 ,2, 3, 4, 5 (d = 2) => 2, 3, 4, 05, 1 => 3, 4, 5, 1, 2
var a = [1, 2, 3, 4, 5];
var d = 2;

function rotLeft(a, d) {
    for (var i = 1; i <= d; i++) {
        a.push(a.shift());
    }
    return a;
}

// console.log(rotLeft(a, d));

//46. Given an array and a number, search for the number within the array, if you find it return "YES", else return "NO";

var numArray = [3, 5, 11, -2, 2];
var numToFind = -2;

function findTheNumber(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return "YES";
        }
    }
    return "NO";
}

// console.log(findTheNumber(numArray, numToFind));

//47.Given two numbers, loop through the range of these numbers and find the odd numbers.

function searchOdd(k, j) {
    var oddNums = [];
    for (var i = k; i <= j; i++) {
        if (i % 2 === 1) {
            oddNums.push(i);
        }
    }
    return oddNums;
}

// console.log(searchOdd(1, 22));

//48.Given a number, add a dash after every even number;

var numToDash = 236457916;

function addDash(num) {
    var str = num.toString();
    const result = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0) {
            result.push(str[i], '-');
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}

// console.log(addDash(numToDash));

//49. Given two arrays, one sorted(array1) and one distinct(array2), find the common elements.

var array1 = [1, 5, 15, 20, 32, 37];
var array2 = [2, 5, 13, 30, 32, 35];
function findCommonElements(array1, array2) {
    var sortedArr = [];
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            console.log(array1[i], array2[i])
            sortedArr.push(array1[i]);
        }
    }
    return sortedArr;
}
// console.log(findCommonElements(array1, array2));

//50. Given five positive integers, find the minimum and maximum values by summing exactly four of the five integers.
//return [max, min].For example, arr is [1 3 5 7 9] minimum sum is 16 and  maximum sum is 24. We would print 16 24

var arrayMinMax = [1, 9, 3, 5, 7];

function minMax(arr) {
    arr = arr.sort();
    var max = 0;
    var min = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            min += arr[i];
        }
        if (i !== 0) {
            max += arr[i];
        }
    }
    return [min, max]
}
// console.log(minMax(arrayMinMax));

//51. Have the function FirstReverse(str) take the str parameter being passed and return the string in 
//reversed order. For example: if the input string is "Hello World and Coders" then your program should 
//return the string sredoC dna dlroW olleH. 
var stringToReverse = "Hello World and Coders";
function reverseString(string) {
	string = string.split("").reverse().join("");
	return string;
}

// console.log(reverseString(stringToReverse));

//52.Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
//Print the decimal value of each fraction on a new line. The test cases are scaled to six decimal places.

var intArr = [-4, 3, -9, 0, 4, 1, ];

function checkIntegers(arr) {
    var pos = 0;
    var neg = 0;
    var zeros = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pos++;
        } else if(arr[i] < 0) {
            neg++;
        } else {
            zeros++;
        }
    }
    pos = pos / arr.length
    pos = pos.toFixed(6);

    neg = neg / arr.length
    neg = neg.toFixed(6);

    zeros = zeros / arr.length;
    zeros = zeros.toFixed(6);

    return [pos, neg, zeros];
}
// console.log(checkIntegers(intArr));

//53. Given a string, reverse each word in the sentence

var string = "Welcome to this Javascript Guide!"

str = string.split(" ").reverse().join(" ");
// console.log(str)

//54. Given an array of integers, find the fractions of the largest number.

var ar= [4, 4, 1, 3, 4];

function findMax(ar) {
    var max;
    for(var i = 0; i < ar.length; i++) {
        if(ar[i] > ar[i + 1]) {
            max = ar[i];
        }
    }
    return max;
}
function findMaxFractions(ar) {
    // var max = Math.max(...ar);
    var max = findMax(ar);
    var count = 0;
    for(var i = 0; i < ar.length; i++) {
        if(ar[i] === max) {
            count++;
        }
    }
    return count;
}

// console.log(findMaxFractions(ar));