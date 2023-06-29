const { hostname } = require('os');
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
});

server.listen(8080, hostname, () => {
    console.log('Server running at http://localhost:8080/');
});
