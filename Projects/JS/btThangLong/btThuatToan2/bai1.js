var readlineSync = require('readline-sync');
var s = String(readlineSync.question('enter the string: '));
var ch = readlineSync.question('enter the char: ');

if (s.indexOf(ch) < 0){
    console.log(-1);
}
else{
    console.log(s.indexOf(ch));
}
