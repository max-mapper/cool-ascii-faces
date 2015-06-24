#!/usr/bin/env node

var coolFace = require('./');
var program = require('commander');

program
.option('-a, --all', 'List all cool faces')
.parse(process.argv);

if (program.all){
  coolFace.faces.forEach(function (face) {
    process.stdout.write(face + '\n');
  });
}else{
  process.stdout.write(coolFace() + '\n');
}
