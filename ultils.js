const util = require("util");
let Base = function() {
    this.name = 'base';
    this.base = '1991';
    this.sayHello =function(){
        console.log('hello ',this.name);
    }
}
Base.prototype.showBase = function(){
    console.log("base is",this.base);
    return this.base
}
Base.prototype.sex = "women";
console.log("Base is",Base);
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub,Base);
const baseObj = new Base();
var sunObj = new Sub();
sunObj.showBase()
console.log(Sub.prototype === Base)
console.log("baseObj is",baseObj.showBase());