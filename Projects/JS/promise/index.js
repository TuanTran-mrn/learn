// var fs = require('promise-fs');

// function readFile(path){
//   return fs.readFile(path, { encoding: 'utf8' });
// }

// function onDoneSong1(data){
//   var students = JSON.parse(data);
//   students.sort(function(previous, next){
//     return previous.score - next.score;
//   })
//   console.log('student list:');
//   for (var student of students){
//     console.log(' ',student.name);
//   }
// }

// function onDoneSong2(data){
//   var arr = JSON.parse(data);
//   var b = arr.map(function(x){
//     return x * x;
//   })
//   console.log(b);
// }

// function onDoneSong3(data){
//   console.log(data);
// }

// function onErr(err){
//   console.log(err);
// }

// readFile('song1.txt')
//   .then(onDoneSong1)
//   .then(function(){
//     return readFile('song2.txt')
//   })
//   .then(onDoneSong2)
//   .then(function(){
//     return readFile('song3.txt');
//   })
//   .then(onDoneSong3)
//   .catch(onErr)

// =========================================

// var fs = require('fs');
// function readFilePromise(path){
//   return new Promise(function(resolve, reject){
//     fs.readFile(path, { encoding: 'utf8' }, function(err, data){
//       if (err){
//         reject(err)
//       }
//       else {
//         resolve(data);
//       }
//     })
//   })
// }

// function onDoneSong1(data){
//   var students = JSON.parse(data);
//   students.sort(function(previous, next){
//     return previous.score - next.score;
//   })
//   console.log('student list:');
//   for (var student of students){
//     console.log(' ',student.name);
//   }
// }

// function onDoneSong2(data){
//   var arr = JSON.parse(data);
//   var b = arr.map(function(x){
//     return x * x;
//   })
//   console.log(b);
// }

// function onDoneSong3(data){
//   console.log(data);
// }

// function onErr(err){
//   console.log(err);
// }

// readFilePromise('song1.txt')
//   .then(onDoneSong1)
//   .then(function(){
//     return readFilePromise('song2.txt');
//   })
//   .then(onDoneSong2)
//   .then(function(){
//     return readFilePromise('song3.txt');
//   })
//   .then(onDoneSong3)
//   .catch(onErr)

//==============================================

var fs = require('fs');

function readFilePromise(path){
  return new Promise(function(resolve, reject){
    fs.readFile(path, { encoding: 'utf8' }, function(err, data){
      if (err){
        reject(err);
      }
      else {
        resolve(data);
      }
    })
  })
}

function onDone(data){
  console.log(data);
}

function onErr(err){
  console.log(err);
}

Promise.all([
  readFilePromise('song1.txt'),
  readFilePromise('song2.txt'),
  readFilePromise('song3.txt')
]).then(function(valuse){
  onDone(valuse[0]);
  onDone(valuse[1]);
  onDone(valuse[2]);
}).catch(function(err){
  console.log(err);
})