// var hello = require('./hello');
// hello.world();
// 以上实例中，代码 require('./hello') 引入了当前目录下的 hello.js 文件（./ 为当前目录，node.js 默认后缀为 js）。
// Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，
// 即所获取模块的 exports 对象。




// console.log('-------------------------------');
// //main.js
// var Hello = require('./hello');
// hello = new Hello();
// hello.setName('BYVoid');
// hello.sayHello();



// Node.js 函数
// console.log('-------------------------------');
// function say(word) {
//   console.log(word);
// }
//
// say('Hello one');
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, "Hello two");




// Node.js 匿名函数
// console.log('-------------------------------');
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(function(word){ console.log(word) }, "Hello");


// 输出全局变量 __filename 的值
// __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。
// 如果在模块中，返回的值是模块文件的路径。
console.log( __filename );


// 输出全局变量 __dirname 的值
console.log( __dirname );


// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
// 返回一个代表定时器的句柄值。
function printHello(){
  // 当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
  // console.trace('qiulongquan');
  console.log( "Hello, World!");
  // console.trace('qiulongquan');
}
// 1秒后执行以上函数
var t = setTimeout(printHello, 1000);

// 清除定时器
// clearTimeout(t);

// setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
// 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。

// var t1=setInterval(printHello,1000);
// clearInterval(t1);



console.time('label1');
console.log('1','2','3');
console.error('error');
console.warn('warn');
console.timeEnd('label1');


console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);
console.log('qiu%dqiu%sqiu',1234,'string');


// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());
