//http module
const http = require('http');
const fs = require('fs');
const _ = require('lodash');


//req, res object , req-> get meta data from browser
const server =http.createServer((req, res)=>{
    console.log("request has been made from browser to server");
// console.log(req);
// console.log(req.type);
// console.log(req.url);
// // console.log(req.headers);
// console.log(req.statusCode);

// res.setHeader('content-Type', 'text/Plain');
let num=_.random(0, 20);
console.log(num);
function greet(){
    console.log('hello');
}
greet();
res.setHeader('Content-Type', 'text/html');

// res.write('Hello Backend Codeder');
// res.write('<h1>Hello Backend Codeder</h1>');
// res.write('<h2>Hello Backend Codeder2</h2>');
let path ='./views';
switch(req.url){
    case '/':
        path+='/index.html'
        res.statusCode=200;
        break
    case '/about':
        path+='/about.html'
        res.statusCode=200
        break;
    case '/about-me':
        res.statusCode=301;
        res.setHeader('Location', '/about');
        res.end()
        break;
    default:
        path+='/404.html'
        res.statusCode=404;
        break;
}
fs.readFile(path, (err, fileData)=>{
    if(err){
        console.log(err);
    }
    else{
        // if only one data need to send then no need of write
        // res.write(fileData);
        res.end(fileData);
    }
})

})
// port number, host, callback function
server.listen(3000, 'localhost', ()=>{
    console.log("server is running on localhost: 3000")
})

//local host domain on web, => 121.0.0.1 -> own computer(server) => loopbad  