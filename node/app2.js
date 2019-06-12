var buf=new Buffer("tanarak");
// console.log(buf.toString('ascii'));
var json=buf.toJSON(buf);
console.log(json);