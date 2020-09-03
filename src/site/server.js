var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>Training10 page!</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(80); //6 - listen for any incoming requests

console.log('Node.js web server at port 80 is running..')