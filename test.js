var cool = require("./")
console.log(cool.faces)
cool.faceStream().pipe(process.stdout)
