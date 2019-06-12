var fs=require('fs');
var data='tanarak test';
var writerSteam=fs.createWriteStream('output.txt');
writerSteam.write(data,'utf8');
