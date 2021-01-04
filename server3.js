var http=require('http');
var fs=require('fs');

var port=8086;
var server=http.createServer(function(req,res){
   res.writeHead(200, {'content-type' : 'text/html'})
   fs.readFile('index.html' ,function(err,data){
       if(err){
           res.writeHead(404,{'oops':'file not found'})
       }
       else
       res.write(data);
    })
}).listen(port)
console.log("the app is listening at port "+port);