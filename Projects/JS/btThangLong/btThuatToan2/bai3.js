var readlineSync = require('readline-sync');
var n = Number(readlineSync.question('nhap vao so n: '));
var a = [];

for (var i = 0; i < n; i++){
    console.log('nhap vao phan tu thu', i, ': ');
    a[i] = Number(readlineSync.question());
}

if (1 == n){
    console.log('tong cac so la: ', a[0]);
}
else{
    a.sort(function(pre, beh){
        return pre - beh;
    }); // sap sep tu lon den be
    
    var s = 0;
    var stt = false;
    for (var i = 0; i < (n - 1); i++){
        if ((a[i] != a[i + 1]) && (false == stt)){
            s += a[i];
        }
        else if(a[i] == a[i + 1]){
            stt = true;
        }
        else if ((a[i] != a[i + 1]) && (true == stt)){
            stt = false;
        }
    }
    if (a[n - 2] != a[n - 1]){
        s += a[n - 1]
    }
    console.log('tong cac so la: ', s);
}