const http = require('http');

const server = http.createServer ((req, res)=> {
    if (req.url === '/') {
        console.log(req.headers)
        res.write('hello from server')
        res.end()
    }
});

server.on('connection', (stream) => {
    console.log('some onde connected')
});

server.listen(4000);
console.log('server linten on http://localhost:4000')