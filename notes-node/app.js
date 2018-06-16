// console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// Arguments vectors
// console.log(process.argv);

const argv = yargs.argv;
// const command = process.argv[2];
const command = argv._[0];
console.log("Command:", command);
// console.log("Process:", process.argv);
// console.log("Yargs:", argv);


if (command === 'add') {
  const note = notes.addNote(argv.title,argv.body);
  if (note === undefined) {
    console.log("Duplicate note found. Note not saved!");
  }else {
    console.log('--SAVED--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    console.log('---------');
  }
}else if (command === "list") {
  // console.log("Listing all notes");
  notes.getAll();
}else if (command === "read") {
  // console.log("Reading note");
  const note = notes.getNote(argv.title);
  if (note === undefined) {
    console.log(`Title: ${argv.title} not found`);
  }else {
    console.log('--NOTE--');
    notes.logNote(note);
    console.log('--------');
  }
}else if (command === "remove") {
  // console.log("Removing note");
  const note = notes.removeNote(argv.title);
  if (note === undefined) {
    console.log(`Title: ${argv.title} not found`);
  }else {
    console.log('--REMOVED---');
    notes.logNote(note);
    console.log('-----------');
  }
}else {
  console.log("Command not recognize");
}
