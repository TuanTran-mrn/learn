var reaLineSync = require('readline-sync');
function Students(){
    this.name;
    this.score;
}
Students.prototype.addName = function(name){
    this.name = name;
}
Students.prototype.addScore = function(score){
    this.score = score;
}


var n;
var a = [];

n = Number(reaLineSync.question('enter number of elements: '));
for (var i = 0; i < n; i++){
    var temp = new Students()
    console.log('the name of the',i, '-th element is: ');
    temp.addName(reaLineSync.question());
    console.log('the score of the',i, '-th element is: ');
    temp.addScore(Number(reaLineSync.question()));
    a[i] = temp;
}
 a.sort(function(pre, beh){
    return pre.score - beh.score;
 });


 console.log(a);
