var fs=require('fs');
var data='';
var readSteam=fs.createReadStream('code.txt');
readSteam.setEncoding('utf8');
readSteam.on('data',function(txt){
    data+=txt;
});
readSteam.on('end',function(){
    console.log(data);
});