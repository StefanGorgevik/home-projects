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
