
var a = [1, 7, 2, -1, 0, 10, 31];
a.sort(function(previous, behind){
    return behind - previous;
});
console.log(a);