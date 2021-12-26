var fs = require('fs');

function readFilePromise(path){
  return new Promise(function(resole, reject){
    fs.readFile(path, {encoding: 'utf8'}, function(err, data){
      if (err){
        reject(err);
      }
      else{
        resole(data);
      }
    })
  });
}

async function readFile() {
  var song1 = await readFilePromise('./song1.txt');
  var song2 = await readFilePromise('./song2.txt');
  var song3 = await readFilePromise('./song3.txt');
  return [song1, song2, song3];
}

function onDoneSong1(data1){
  var students = [];
  students = JSON.parse(data1);
  students.sort(function(pre, beh){
    return pre.score - beh.score;
  });
  console.log(students);
}

function onDoneSong2(data2){
  var arr = JSON.parse(data2);
  var b = arr.filter(function(element){
    return element > 2;
  });
  console.log(b);
}

function onDoneSong3(data3){
  console.log(data3);
}

readFile()
  .then(function(data){
    onDoneSong1(data[0]);
    onDoneSong2(data[1]);
    onDoneSong3(data[2]);
  })
  .catch(function(err){
    console.log(err);
  })