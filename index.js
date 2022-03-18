// CRUD
// [] create note
// [] read note
// [] update note
// [] delete note

const json = require('./data.json');
const fs = require('fs');

const command = process.argv[2];

let id = null;

let text = null;


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
  case 'delete':
    remove();
    write();
    break;
  default:
    console.log('wrong command');
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
    console.log(`${x}: ${json.notes[x]}`);
  }
}

function remove() {
  id = process.argv[3];
  delete json.notes[id];
}

function write() {
  const data = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
}
