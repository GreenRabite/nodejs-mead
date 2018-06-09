console.log("Starting app");

const fs = require('fs');
const os = require('os');

// (node:19372) [DEP0013] DeprecationWarning: Calling an asynchronous
// function without callb ack is deprecated.
// fs.appendFile('greetings.txt','Hello world!');

//USers info
const user = os.userInfo();
// console.log(user);

// with callback
fs.appendFile('greetings.txt',`Hello ${user.username}\n`,function(err){
  if (err) {
    console.log("Unable to write to file");
  }
});

// Async
// fs.appendFileSync('greetings.txt',"Hello world");
