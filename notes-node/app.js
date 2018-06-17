// console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// Arguments vectors
// console.log(process.argv);
const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};


const argv = yargs
  .command('add','Add a new note',{
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note',{
    title: titleOptions
  })
  .command('remove','Remove a note',{
    title: titleOptions
  })
  .help()
  .argv;
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
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note =>{
    console.log('--------');
    notes.logNote(note);
  });
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
