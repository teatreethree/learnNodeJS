var response = require('./method.js'); 
//console.log(response.update());
//response.data.deleteUser()
var fs=require('fs');
var readMe=fs.readFileSync('code.txt','utf8');
// console.log(readMe);
// fs.writeFileSync('code2.txt','test hello nodeJS');
fs.mkdir('Project',function(){
    fs.writeFileSync('./Project/readTe.txt',readMe);
});