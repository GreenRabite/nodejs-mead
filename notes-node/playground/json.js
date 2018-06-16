// let obj = {
//   name: "Andy"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "Andy", "age":32}';
// const person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
let originalNote = {
  title: "Some title2",
  body: "Some body"
};

// originalNoteString
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

const noteString = fs.readFileSync('notes.json');
//note
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
