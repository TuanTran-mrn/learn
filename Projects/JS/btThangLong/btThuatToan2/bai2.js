var readlineSync = require('readline-sync');
var n = Number(readlineSync.question('nhap vao so n: '));
var a = [];

for (var i = 0; i < n; i++){
    console.log('nhap vao phan tu thu', i, ': ');
    a[i] = Number(readlineSync.question());
}

if (1 == n){
    console.log('tich lon nhat la: ', a[0]);
}
else{
    a.sort(function(pre, beh){
        return pre - beh;
    }); // sap sep tu lon den be
    
    if ((a[0] * a[1]) > (a[n - 1] * a[n - 2])){
        console.log('tich lon nhat la: ',a[0] * a[1]);
    }
    else{
        console.log('tich lon nhat la: ',a[n - 1] * a[n - 2]);
    }
}
