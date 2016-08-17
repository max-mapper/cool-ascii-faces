var spigot = require("stream-spigot")
var fs = require('fs')

var faces = JSON.parse(fs.readFileSync('./faces.json').toString()).faces 

module.exports = function() {
  return faces[Math.floor(Math.random() * faces.length)]
}

module.exports.faces = faces

module.exports.faceStream = function() {
  return spigot(faces)
}
