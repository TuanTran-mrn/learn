var readlineSync = require('readline-sync');
var n = Number(readlineSync.question('nhap vao so n: '));

if (0 == n){
    console.log(n);
}
else{
    var tong = 0;
    var tich = 1;
    while (0 != n){
        var temp;
        temp = n % 10;
        n = (n - n % 10)/10;
        tong += temp;
        tich *= temp;
    }
    console.log(tich - tong);
}