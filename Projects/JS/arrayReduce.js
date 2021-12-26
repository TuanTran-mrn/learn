// var a = [1, 2, 3, 4, 6];
// var b = a.reduce(function(before, after){
//     return before - after;
// });
// console.log(b);

// ===================

var studens = [
    { name: 'Tuan', age: 25, score: [8, 7, 9, 10] },
    { name: 'Linh', age: 24, score: [9, 7, 7, 10] },
    { name: 'Trang', age: 29, score: [5, 7, 9, 5] },
    { name: 'Quynh', age: 22, score: [9, 7, 7, 7] }
];
var mediumScore = [];
 for (var studen of studens){
    var b = {};
    b['name'] = studen['name'];
    var totalScore = studen.score.reduce(function(bef, aft){
        return bef + aft;
    });
    b['mediumScore'] = totalScore / 4;
    mediumScore.push(b);
 }
 console.log(mediumScore);

// ===================

// var donHang = [
//     { name: 'flower', soLuong: 1, donGia: 2 },
//     { name: 'clothers', soLuong: 5, donGia: 5 },
//     { name: 'phone', soLuong: 2, donGia: 10 }
// ];

// donHang.unshift(0);
// var b = donHang.reduce(function(bef, aft){
//     return bef + aft.soLuong * aft.donGia;
// });
// donHang.shift();

// console.log(b);
// console.log(donHang);

// ===================

// var donHang = [
//     { name: 'flower', soLuong: 1, donGia: 2 },
//     { name: 'clothers', soLuong: 5, donGia: 5 },
//     { name: 'phone', soLuong: 2, donGia: 10 }
// ];

// var b = donHang.reduce(function(bef, aft){
//     return bef + aft.soLuong * aft.donGia;
// }, 0);

// console.log(b);
// console.log(donHang);

// ===================

// var item = ['tom', 'bill', 'ken'];
// var total = item.reduce(function(bef, aft){
//     return bef + '<' + aft + '>';
// }, '');
// console.log(total);