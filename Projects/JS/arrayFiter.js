var a = [1, 2, 5, 7, 8];
var b = a.filter(function(element){
    var stt = false;
    if (element % 2 == 0)
    {
        stt = true;
    }

    return stt;
});

console.log(b);