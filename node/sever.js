var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'}); //ระบุ type ในการแสดงผล sever
    res.end('helloworld') //ฝฝเมื่อ res เสร็จให้ตอบกลับยังไง
}).listen(8081,'127.0.0.1');