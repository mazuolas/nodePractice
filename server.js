var http = require('http');
var time = require('./clock.js')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write(time.myDateTime())
  res.end('Hello World!')
}).listen(8080);
