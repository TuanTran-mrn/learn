function Mouse(){
    this.name;
    this.age;
    this.addName = function(name){
        this.name = name;
        return this;
    };
    this.addAge = function(age){
        this.age = age;
        return this;
    };
}
// Mouse.prototype.gotoSleep = function(){
//     console.log('sleeping....');
//     return this;
// };

var mouse1 = new Mouse();
mouse1.addName('Mickey').addAge(1);
console.log(mouse1);
