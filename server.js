var app = require('http'),
    fs = require('fs');

app.createServer(function(req,res){
  if(req.url == '/') {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fs.readFileSync('./public/index.html'));
  } else if(req.url == '/css') {
    res.writeHead(200, {"Content-Type":"text/css"});
    res.end(fs.readFileSync('./public/style.css'));
  } else if(req.url == '/js') {
    res.writeHead(200, {'Content-type':'application/javascript'});
    res.end(fs.readFileSync('./public/app.js'));
  }
}).listen(3000,"127.0.0.1");
console.log('listening on port 3000');