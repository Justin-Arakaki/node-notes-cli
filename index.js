// CRUD
// [] create note
// [] read note
// [] update note
// [] delete note

const json = require('./data.json');
console.log('json: ', json);

const command = process.argv[2];
console.log('command: ', command);

const id = process.argv[3];
console.log('id: ', id);

const text = process.argv[4];
console.log('text: ', text);
