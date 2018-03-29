const http = require("http");
const url = require('url');
const util = require('util');
const querystring = require('querystring');
// get 请求
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url,true),true))
}).listen(4000)
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
 
}).listen(5000);
//post 请求

const postHTML = 
'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post" action="/post2" >' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
  http.createServer((req,res)=>{
      let body = ''
      req.on('data',(chunk)=>{
          console.log("post chunk is",chunk)
          body += chunk;
      })
      req.on('end',()=>{
          console.log("post body is",body)
          body = querystring.parse(body);
          console.log("post2 body2 is",body)
          res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
          if(body.name&& body.url){
            console.log("post req",url.parse(req.url))
            if(url.parse(req.url).pathname!=='/post' &&url.parse(req.url).pathname!='/favicon.ico'){
                res.write("404")
                return;
             }
              res.write("网站名"+body.name);
              res.write("<br>")
              res.write("网站URL"+body.url)
          }else {
              res.write(postHTML);
          }
          res.end()
      })
  }).listen(3000);