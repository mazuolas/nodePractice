var http = require('http');
var time = require('./clock.js')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write(time.myDateTime());
  res.write(req.url);
  res.end();

}).listen(8080);
