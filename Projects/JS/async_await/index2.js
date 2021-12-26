var readlineSync = require('readline-sync');
var fs = require('fs');
const { prototype } = require('events');

function enterUserInfor(){
  return new Promise(function(resolve, reject){
    var userName = readlineSync.question('nhap ten nguoi dung: ');
    if (userName){
      resolve(userName);
    }
    else{
      reject('khong nhap ten nguoi dung')
    }
  })
}

async function readInfo(){
  return enterUserInfor();
}

console.log('start');
readInfo()
  .then(function(value){
    console.log(value)
  })
  .catch(function(err){
    console.log(err);
  })
console.log('loading...');