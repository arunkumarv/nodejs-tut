var http = require ( 'http' );

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.url == '/about')
    res.write('Hello World from About!');
  else 
    res.write('Hello World');
  res.end();
}).listen ( 8080 );
