var pi=3.14;
var obj={}; //obj
obj.updateData=function(){
    console.log("update data");
}
obj.deleteUser=function(){
    console.log("delete User");
}
var update=function(){
    return "Update sever";
}

var add=function(a,b){
    return a+b;
}
//exportsการเอา modul ออกไปใช้
exports.pi=pi;
exports.add=add;
exports.update=update;
exports.data=obj;
