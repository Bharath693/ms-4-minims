var http = require('http');
var port=8080
http.createServer(function(req,res){
    res.write('hello world')
    res.end();
}).listen(port);
console.log('sever is listening at port '+port)
