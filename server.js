const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(fs.readFileSync(__dirname + '/index.html'));
    } else if (req.url.endsWith('.css')) {
        res.end(fs.readFileSync(__dirname + req.url));
    } else if (req.url === '/register' && req.method === 'POST') {
        res.end('<h1>Booking confirmed!</h1><a href="/">Home</a>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fs.readFileSync(__dirname + '/index.html'));
    }
}).listen(3000);