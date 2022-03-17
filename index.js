// CRUD
// [] create note
// [] read note
// [] update note
// [] delete note

const json = require('./data.json');
const fs = require('fs');

console.log('json: ', json);

const command = process.argv[2];
console.log('command: ', command);

let id = null;
console.log('id: ', id);

let text = null;
console.log('text: ', text);


switch (command) {
  case 'create':
    create();
    write();
    break;
  case 'update':
    update();
    write();
    break;
  case 'read':
    read();
    break;
  default:
    console.log('I dunno what you\'re talking about');
}

function create() {
  text = process.argv[3];
  json.notes[json.nextId.toString()] = text;
  json.nextId++;
}

function update() {
  id = process.argv[3];
  text = process.argv[4];
  json.notes[id] = text;
}

function read() {
  for (const x in json.notes) {
    console.log(x + ': ' + json.notes[x]);
  }
}

function delete() {
  // STUFF
}

function write() {
  const data = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
}
