// CRUD
// [] create note
// [] read note
// [] update note
// [] delete note

const json = require('./data.json');
console.log('json: ', json);

const command = process.argv[2];
console.log('command: ', command);

let id = null;
console.log('id: ', id);

let text = null;
console.log('text: ', text);

function create() {
  text = process.argv[3]
  json.notes[json.nextId.toString()] = text
  json.nextId++;
}

switch (command) {
  case 'create':
    create();
    break;
  }

  console.log('value of json:',json);
