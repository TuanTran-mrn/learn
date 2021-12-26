var Mouse = require('./mouse');
var Cat = require('./cat')

var mickey = new Mouse('black');
var jerry = new Mouse('yellow');

var tom = new Cat();
tom.eat(mickey);
console.log(mickey);
console.log(jerry);