var http = require('http');
var time = require('./clock.js')
var url = require('url')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write(time.myDateTime());
  var q = url.parse(req.url, true).query
  res.write(q.test);
  res.end();

}).listen(8080);
