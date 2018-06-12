console.log("Starting notes.js");

// console.log(module);
// You can see that exports is just an object

// module.exports.age = 32;
// module.exports.addNote = ()=>{
//   console.log('addNote');
//   return 'New note';
// };

const fs = require('fs');

const addNote = (title,body) => {
  console.log("Adding note", title, body);
  let notes = [];
  const note = {
    title,
    body
  };
  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }
  const duplicateNotes = notes.filter((singleNote) => singleNote.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }
};

const getAll = ()=>{
  console.log('Getting all notes');
};

const getNote = (title)=>{
  console.log('Getting note',title);
};

const removeNote = (title)=>{
  console.log('Removing note',title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
