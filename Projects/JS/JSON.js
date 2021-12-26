var students = [
    { name: 'Tuan', age: 25, score: 10 },
    { name: 'Lan', age: 23, score: 7 }
];

var stu = JSON.stringify(students);
var t = JSON.parse(stu);

for (var temp of t){
    console.log(temp);
}
