var express=require('express');
var app3=express();
app3.get('/',function(req,res){
    res.send("<h1>hello user</h1>")
});
// app3.get('/profile/:name',function(req,res){
//     res.send("<h1>nodejs tutorial by "+req.params.name+"</h1>")
// });
app3.get('/user/profile/:id',function(req,res){
    res.send("<h1>nodejs tutorial by "+req.params.id+"</h1>")
});
app3.listen(8081);
