var fs = require('fs');
var readlineSync = require('readline-sync');

var studentsTemp = fs.readFileSync('./listStudentsData.txt', {encoding: 'utf8'});
var studentsData = [];
if ('' != studentsTemp){
    studentsData = JSON.parse(studentsTemp);
}
var stt = true;

function showStudentsList(){
    for (var student of studentsData){
        console.log(student);
    }
}

function createANewStudent(){
    var student = {};
    student['name'] = readlineSync.question('enter student\'s name: ');
    student['age'] = Number(readlineSync.question('enter student\'s age: '));
    student['score'] = Number(readlineSync.question('enter student\'s score: '));
    studentsData.push(student);
}

function saveStudentsList(){
    var temp = JSON.stringify(studentsData);
    fs.writeFileSync('./listStudentsData.txt', temp, {encoding: 'utf8'});
}

function main(){
    while (stt){
        var key = readlineSync.question('choose three opition(1: show students list - 2: create a new student - 3: save and exit):');
        switch (key){
            case '1':
                showStudentsList();
                break;
            case '2':
                createANewStudent();
                break;
            case '3':
                saveStudentsList();
                stt = false;
                break;
            default:
                stt = false;
                break;
        }
    }
}

main();