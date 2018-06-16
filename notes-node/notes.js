// console.log("Starting notes.js");

// console.log(module);
// You can see that exports is just an object

// module.exports.age = 32;
// module.exports.addNote = ()=>{
//   console.log('addNote');
//   return 'New note';
// };

const fs = require('fs');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

const addNote = (title,body) => {
  console.log("Adding note", title, body);
  let notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter((singleNote) => singleNote.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = ()=>{
  console.log('Getting all notes');
};

const getNote = (title)=>{
  const notes = fetchNotes();
  let readNote = notes.filter(note => note.title === title);
  return readNote.length === 1 ? readNote[0] : undefined;
};

const removeNote = (title)=>{
  const notes = fetchNotes();
  let removedNote;
  let newNotes = [];
  notes.forEach(note => {
    if (note.title === title) {
      removedNote = {title: note.title, body: note.body};
    }else {
      newNotes.push(note);
    }
  });
  saveNotes(newNotes);
  return removedNote;
};

const logNote = (note) => {
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
