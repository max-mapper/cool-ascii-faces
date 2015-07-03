#!/usr/bin/env node

var coolFace = require('./');
var program = require('commander');

program
.option('-a, --all', 'List all cool faces')
.option('-F, --flip-that-table','FLIP THAT TABLE')
.option('-h, --happy', 'List all happy faces')
.parse(process.argv);

var category = "random"
if (program.flipThatTable) category = "flipThatTable"
if (program.happy) category = "happy"

if (program.all){
  for (var categories in coolFace.faces){
    coolFace.faces[categories].forEach(function (face) {
      process.stdout.write(face + '\n');
    });
  }
}else{
  process.stdout.write(coolFace.getFaceWithCategory(category) + '\n');
}
