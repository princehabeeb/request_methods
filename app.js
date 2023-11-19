const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('content-Type', 'text/html');
    let path = './blogs/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;
        case '/contact':
                path += 'contact.html';
                res.statusCode = 200;
                break;
    
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    
      fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            res.write(data)
            res.end();
        }
    })

});


server.listen(3000, () => {
    console.log('listening to port: 3000');
})


