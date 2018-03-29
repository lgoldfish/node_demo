const os = require('os') ;
const path = require('path');
const net =require('net');
//OS
// 操作系统的默认临时文件夹
console.log("tmpdir",os.tmpdir())
//返回CPU的字节序
console.log("endianness",os.endianness())
//OS主机名
console.log("hostname",os.hostname())
//OS名
console.log("paltform",os.platform())
// CPU构架
console.log("arch",os.arch())
// 操作系统名
console.log('type : ' + os.type());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

//path
 
// 规范化路径，注意'..' 和 '.'。  
console.log("normalize",path.normalize("/test/test1//////2slashes/1slash/tab/../.."));  
  
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。  
console.log("join",path.join('/test', 'test1////', '2slashes/1slash', 'tab', '..'));  
  
// 将 to 参数解析为绝对路径。  
console.log("resolve",path.resolve(__dirname,"index.js"));  
  
// 判断参数 path 是否是绝对路径。  
console.log("isAbsolute",path.isAbsolute("cxm/Local/"));  
  
// 用于将相对路径转为绝对路径。  
console.log("relative",path.relative("index.js", "cxm/Local"));  
  
// 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。  
console.log("dirname",path.dirname("cxm/Local/"));  
  
// 返回路径中的最后一部分。同 Unix 命令 bashname 类似。  
console.log("basename",path.basename("cxm/Local/"));  
  
// 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。  
console.log("extname",path.extname("cxm/Local/"));  
  
// 返回路径字符串的对象。  
console.log("parse",path.parse("cxm/Local"));  
  
// 从对象中返回路径字符串，和 path.parse 相反。  
console.log("format",path.format(path.parse("cxm/Local")));  
  
// 平台的文件路径分隔符，'\\' 或 '/'。  
console.log("sep",path.sep);  
  
// 平台的分隔符, ; or ':'.  
console.log("delimiter",path.delimiter);  
  
// 提供上述 path 的方法，不过总是以 posix 兼容的方式交互。  
// console.log("posix",path.posix);  
  
// 提供上述 path 的方法，不过总是以 win32 兼容的方式交互。  
// console.log("win32",path.win32);  

