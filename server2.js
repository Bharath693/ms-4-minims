var http=require('http');
var port=5000;
http.createServer(function(req,res){
  res.write('<h1>welcome to my site</h1> <br>');
  res.write('<p>content coming soon...')
  res.end()
}).listen(port)
console.log("the app is listening at port "+port)