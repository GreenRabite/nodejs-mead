console.log("Starting app");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// (node:19372) [DEP0013] DeprecationWarning: Calling an asynchronous
// function without callb ack is deprecated.
// fs.appendFile('greetings.txt','Hello world!');

//USers info
const user = os.userInfo();
// console.log(user);

// const res = notes.addNote();

// Add num
const result = notes.addNum(3,4);
// console.log(result);

// with callback
// fs.appendFile('greetings.txt',`Hello ${user.username}!\n You are ${notes.age}`,function(err){
//   if (err) {
//     console.log("Unable to write to file");
//   }
// });

// Async
// fs.appendFileSync('greetings.txt',"Hello world");

//Lodash exerises
// console.log(_.isString(true));
// console.log(_.isString("Andy"));

let filteredArry = _.uniq(['Andy',1,'Andy']);
console.log(filteredArry);
