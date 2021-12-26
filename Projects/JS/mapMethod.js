// var a = [1, 2, 3, 4, 5];
// var b = a.map(function(x){
//     return x*x;
// });
// console.log(a);
// console.log(b);

var employees = [
    { name: 'Tuan', ho: 'Tran', age: 26 },
    { name: 'Quynh', ho: 'Nguyen', age: 22 },
    { name: 'Linh', ho: 'Nguyen', age: 26 }
];

var fullName = employees.map(function(employee){
    return {name: employee.ho + ' ' + employee.name, age: employee.age};
});

console.log(fullName);