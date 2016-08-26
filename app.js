var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('The purpose of life is to be defeated by greater and greater things.\n');
}).listen(process.env.PORT, process.env.IP);