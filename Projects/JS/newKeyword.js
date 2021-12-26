// function cat(){
//     this.name = 'Tom';
//     this.stomarch = [];
//     this.eat = function(mouse){
//         this.stomarch.push(mouse);
//         return this;
//     }
// }

// var cat1 = new cat().eat('m1').eat('m2');
// console.log(cat1);

function Characters(){
    this.name;
    this.gender;
    this.skinColor;
    this.typeHair;
    this.addName = function(name){
        this.name = name;
        return this;
    };
    this.addGender = function(gender){
        this.gender = gender;
        return this;
    };
    this.addSkinColor = function(skinColor){
        this.skinColor = skinColor;
        return this;
    };
    this.addTypeHair = function(typeHair){
        this.typeHair = typeHair;
        return this;
    };
}

var player1 = new Characters();
player1.addName('Tuan').addGender('male').addSkinColor('yellow').addTypeHair('short');
console.log(player1);