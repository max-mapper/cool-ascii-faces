#!/usr/bin/env node

var coolFace = require('./');
var program = require('commander');

program
.option('-a, --all', 'List all cool faces')
.option('-F, --flip-that-table','FLIP THAT TABLE')
.parse(process.argv);

if (program.all){
  coolFace.faces.forEach(function (face) {
    process.stdout.write(face + '\n');
  });
}else if (program.flipThatTable){
  process.stdout.write("flip that table\n");
}else{
  process.stdout.write(coolFace() + '\n');
}
