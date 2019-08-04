//^ enumerating an object's properties
// var myData = {
//     name: "Adam",
//     weather: "sunny",
//     printMessage: function() {
//         console.log("hello " + this.name + ". ");
//         console.log("Today is " + this.weather + ".");
//     }
// };
// for(var prop in myData) {
//     console.log(myData[prop]);
//     console.log(prop);
//     console.log("Name: " + prop + " value: " + myData[prop]);
// }

////^ deleting a property
// delete myData.weather;
// console.log(myData);

//^ checking to see if an object has a property using the in expression
// var myData = {
//     name: "stef",
//     weather: "cloudy"
// }
// var hasName = "name" in myData;
// var hasData = "date" in myData;

// console.log("HasName: " + hasName)
// console.log("HasData: " + hasData)

//^ Performing equality and identity tests on objects
// var myData1 = {
//     name: "Stef",
//     weather: "cloudy"
// }

// var myData2 = {
//     name: "Stef",
//     weather: "cloudy"
// }

// var myData3 = myData2;
// var test1 = myData1 == myData2;
// var test2 = myData2 == myData3;
// var test3 = myData1 === myData2;
// var test4 = myData2 === myData3;

// console.log("Test 1: " + test1 + " Test 2: " + test2)
// console.log("Test 3: " + test3 + " Test 4: " + test4)

//^ converting numbers to string
// var myData1 = (5).toString() + String(5);
// console.log("Result: " + myData1);
// var chk = String(5);
// console.log(chk);

//^ arrays
// var arr1 = [1,2,3];
// var arr2 = [4,5,6];

// var arr3 = arr1.concat(arr2);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// var arr3 = arr1.join(arr2);
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

// //^ handling errors
// try {
// var myArray;
// for(var i = 0; i < myArray.length; i++) {
//     console.log("Index " + i + ": " + myArray[i]); //Error: TypeError: Cannot read property 'length' of undefined
// }
// }catch (err) {
//     console.log("Error: " + err);
// }finally {
//     console.log("Statements here are always executed");
// }

//^ checking for null or undefined
// var myData = {
//     name: "Adam",
//     city: null
// }
// if(!myData.name) {
//     console.log("name is null or undefined");
// }else{
//     console.log("name is NOT null or undefined");
// }

// if(!myData.city) {
//     console.log("name is null or undefined");
// }else{
//     console.log("name is NOT null or undefined");
// }

//NODE JS
// function longRun(callback) {
// 	setTimeout(callback, 3000);
// }

// var foo = () => {
// 	console.log("ending a long operation...")
// }

// function userClicked() {
// 	console.log("starting a long operation...");
// 	longRun(foo);
// }

// userClicked();


// function longRun(callback) {
// 	setTimeout(callback, 3000);
// }

// var webRequest = (request) => {
//     console.log("starting a long operation for request:", request.id);
//     longRun(function() {
//         console.log("ending a long operation for request:", request.id);
//     })
// }
// webRequest({id: 1});



//^Internals

// console.time("timer");
// setTimeout(function() {
//     console.timeEnd("timer");
// }, 1000)

// console.time("timeit");
// var fib = (n) => {
//     if(n < 2) 
//         return 1;
//     else 
//         return fib(n - 2) + fib(n - 1);
// } 
// fib(44);
// console.timeEnd("timeit");


//^utility func

// function fibonacci(n) {
//     if(n < 2) return 1
//     else return fibonacci(n - 1) + fibonacci(n-1);
// }

// console.time("timer");
// setTimeout(function(){
//     console.timeEnd("timer");
// })

// fibonacci(44);

//^ handleClientRequests(30)
/* 
var handleClientRequests = (request) => {
    makeDbCall(request.someInfo, function(result) {
        request.complete(result);
    });
}; */

//^more JS (31)

// var foo = {bas: 123};
// var bar = foo;
// bar.bas = 456;
// console.log(foo.bas);
// console.log(bar.bas);
// foo.bas = 336;
// console.log(foo.bas);
// console.log(bar.bas);

// var foo = { bas: 123};
// var bar = { bas: foo.bas};


// bar.bas = 246;
// console.log(foo.bas);
// console.log(bar.bas);

//^ Default Values

// var foo;
// console.log(foo);

//^ truthy falsy

// if(!false) {
//     console.log("falsy");
// }
// if(!null) {
//     console.log("falsy");
// }
// if(!undefined) {
//     console.log("falsy");
// }

//^ revealing module pattern
// var printableMessage = () => {
//     var message = "hello";
//     function setMessage(newMessage) {
//         if(!newMessage) throw new Error("cannot set empty message");
//         message = newMessage;
//     }
//     function getMessage() {
//         return message;
//     }
//     function printMessage() {
//         console.log(message);
//     }
//     return {
//         setMessage: setMessage,
//         getMessage: getMessage,
//         printMessage: printMessage
//     };
// }

//console.log(printableMessage());
//You are actually creating a new object(awesome1)
// var awesome1 = printableMessage();
// console.log(awesome1)
// awesome1.printMessage();
// awesome1.setMessage("hi");
// awesome1.printMessage();
// var msg = awesome1.getMessage();
// console.log(msg);

// var awesome2 = printableMessage();
// awesome2.printMessage();
// awesome2.setMessage("hi");
// awesome2.printMessage();

// awesome1.printMessage(); //awesome one is not changed(prints hello!);

//^ understanding prototype
//Traditional
// var foo = {};
// foo.__proto__.bar = 123;
// console.log(foo.bar);

// function foo() { };
// foo.prototype.bar = 123;
// var bas = new foo();
// console.log(bas.__proto__ === foo.prototype);
// console.log(bas.bar);

// function foo() { };
// foo.prototype.bar = 123;
// var bas = new foo();
// var qux = new foo();
// console.log(bas.bar);
// console.log(qux.bar);
// foo.prototype.bar = 456;
// console.log(bas.bar);
// console.log(qux.bar);