var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    //res.writeHead(200,{'content-Type':'text/plain'}); //ระบุ type ในการแสดงผล sever 
    //res.end('helloworld') //ฝฝเมื่อ res เสร็จให้ตอบกลับยังไง
    if(req.url=='/home'|| req.url=='/'){
        res.writeHead(200,{'content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'index.html','utf8');
        myStream.pipe(res);
    }
    else if(req.url=='/facebook'){
        res.writeHead(200,{'content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'facebook.html','utf8');
        myStream.pipe(res);
    }
    else if(req.url=='/youtube'){
        res.writeHead(200,{'content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+'youtube.html','utf8');
        myStream.pipe(res);
    }
    else if(req.url=='/notfound'){
        res.writeHead(404,{'content-Type':'text/html'});
        var myStream=fs.createReadStream(__dirname+"/"+ 'notfound.html','utf8');
        myStream.pipe(res);
    }
}).listen(8081,'127.0.0.1');