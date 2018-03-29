//_filename 表示当前脚本的文件名
console.log("filename is",__filename);
//_dirname 表示当前执行脚本所在的目录
console.log("dirname is",__dirname);
//setTimeout
let printHello = _=>{
    console.log("hello world")
}
setTimeout(printHello,2000)
//clearTimeout
//setInterval
let print = _=>{
    console.log("node is niuB")
}
// setInterval(print,2000)
//process
process.on('exit',(code)=>{
    setTimeout(()=>{
      console.log("this code not run")
    },1000)
    console.log("exit code is",code)
})