// for (var i = 9; i >= 0; i--){
// }
// console.log(i);
// i++;
// console.log(i);

var employees = [
    { name: 'Tuan', age: 26 },
    { name: 'Minh', age: 22 },
    { name: 'Quynh', age: 22 }
];

for (var employee of employees){
    console.log(employee.name);
}
 console.log('========');

var myDog = {
    name: 'Mick',
    age: 2,
    weight: 30
};

// myDog.name = myDog['name'];
for (var key in myDog){
    console.log(key,':', myDog[key]);
}
