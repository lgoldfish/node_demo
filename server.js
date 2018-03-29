const http = require("http");
const url = require("url");
let start = (route)=>{
    let onRequest = (req,res)=> {
        let pathName = url.parse(req.url).pathname;
        let query = url.parse(req.url).query;
        if(pathName === '/favicon.ico') {
            console.log("ignore")
        }else {
            console.log("req is",req.url);
            console.log("pathname is",pathName)
            console.log("query is",query)
            route(pathName)
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.write("hello world");
            res.end()
        }
    }
    http.createServer(onRequest).listen(8888);
    console.log(" server has started")
} 
exports.start = start ;
