const fs = require('fs');
const buf = new Buffer(1024);
console.log('buf is',buf)
//fs
let data = fs.readFileSync("input.txt");
console.log("data from input.txt",data.toString())
fs.readFile("package.json",(err,data)=>{
  if(err) return console.error(err)
  console.log("data from package.json",data.toString())
})
//打开文件
fs.open("text.txt",'r+',(err,fd)=>{
  if(err){
    return console.error(err)
  }
  console.log('打开文件成功',fd)
})
// 读取文件信息
fs.stat("./node_modules",(err,stat)=>{
  if(err){
    return console.error(err)
  }
  console.log("stats is",stat.isDirectory())
})
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
  if (err) {
      return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------")
  console.log("读取写入的数据！");
  fs.readFile('input.txt', function (err, data) {
     if (err) {
        return console.error(err);
     }
     console.log("异步读取文件数据: " + data.toString());
  });
});
console.log("准备打开已存在的文件！");
fs.open('text.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！",fd);
   console.log("准备读取文件：");
   // 读取打开的文件内容到缓冲区中
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
       // 关闭文件
       fs.close(fd, function(err){
        if (err){
           console.log(err);
        } 
        console.log("文件关闭成功");
     });
   });
});
// 删除文件
// fs.unlink("input.text.gz",(err)=>{
//     if(err){
//         return console.error("unlink error",err)
//     }
//     console.log("文件删除成功")
// })
//创建目录
fs.mkdir("./test/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功。");
 });
 //读取目录
 fs.readdir("./node_modules",(err,files)=>{
     if(err){
         return console.error(err)
     }
     console.log("readfiles is",files)
 })