// function http(url, method, successCallback, errorHandler) {
//     setTimeout(function() {
//         var data = "the answer";
//         if(data) {
//             successCallback(data);
//         }else{
//             errorHandler("No data");
//         }
//     },1000);
// }

// http("http://google.com", "GET", function(data){
//     console.log(data);
// }, function(err) {
//     console.log(err);
// });

//with promises

// function http(url, method) {
//     var promise = new Promise (function(resolve, reject) {
//         setTimeout(function() {
//             var data = "the answer";
//             if(data) {
//                 resolve(data);
//             }else{
//                 reject("No data");
//             }
//         },1000);
//     })
//     return promise;
// }

// http("http://google.com", "GET") 
//     .then(function(data){
//     console.log(data);
//     })
//     .catch(function(err) {
//     console.log(err);
//     });

//2

// function http(url, method) {
//     var promise = new Promise (function(resolve, reject) {
//         setTimeout(function() {
//             var data = "the answer";
//             if(data) {
//                 resolve(data);
//             }else{
//                 reject("No data");
//             }
//         },1000);
//     })
//     return promise;
// }

// http("http://google.com", "GET") 
//     .then(function(data){
//         return data.toUpperCase();
//     })
//     .then(function(modifiedData) {
//         console.log(modifiedData);
//         return modifiedData;
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(err) {
//     console.log(err);
//     });

//LESSON 2

