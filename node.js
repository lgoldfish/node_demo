let http = require("http");
let fs = require("fs");
let events = require("events");
let zlib = require("zlib");
var buf = new Buffer(1024);
const eventEmitter = new events.EventEmitter();
//http
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    // response.end("hello world\n")
    response.write("hello world!")
    response.end()
}).listen(8888)


//event
let connectHandler = (A,B)=>{
  console.log("连接成功",A,B)
  eventEmitter.emit("data_received")
}
eventEmitter.on("connection", connectHandler);
eventEmitter.on("data_received",()=>{
  console.log("数据链接成功");
})
eventEmitter.emit("connection","A","B");

const listener1 = ()=>{
  console.log("listener1 run")
}
const listener2 = ()=>{
  console.log("listener2 run")
}
eventEmitter.addListener("run",listener1);
eventEmitter.on("run",listener2);
eventEmitter.emit("run");
let eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,'run')
console.log("eventListeners is",eventListeners)
let listeners = eventEmitter.listeners("run")
console.log("listeners",listeners)
eventEmitter.removeListener("run",listener1)
console.log("removeListeners")
eventEmitter.emit("run")
//Buffer
const buffer = Buffer.from('runoob');
console.log("buffer",buffer.toString())
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);
console.log("buf json",json)
//Stream
let data2 ='';
let readerStream = fs.createReadStream("input.txt")
readerStream.setEncoding("UTF8");
readerStream.on("data",(chunk)=>{
  data2+=chunk;
  console.log("chunk is",chunk)
  console.log("data data",data2)
})
readerStream.on("end",()=>{
  console.log("data end",data2)
})
readerStream.on("error",(err)=>{
  console.log("error ",err)
})
readerStream.on("finish",()=>{
  console.log("finish ",data2)
})
let data3 = "www.palmap.com 很叼的";
let writeStream = fs.createWriteStream("output.txt")
// writeStream.write(data3,"UTF8");
// writeStream.end("mdb");
// writeStream.on("finish",()=>{
//   console.log("write finish")
// })
// writeStream.on("error",(err)=>{
//   console.log("write error",err)
// })
// readerStream.pipe(writeStream)
// readerStream.pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'));

//