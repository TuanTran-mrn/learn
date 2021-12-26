function Cat(){
    this.stomarch = [];
}

Cat.prototype.eat = function(mouse){
    this.stomarch.push(mouse);
    mouse.die();
}

module.exports = Cat;