// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
//
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。');
//
//    // 触发 data_received 事件
//    eventEmitter.emit('data_received');
// }
//
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler);
//
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
//
// // 执行顺序是var变量声明但是回调函数不会被执行
// // 绑定事件成功后也不会被执行，只有emit触发事件才会执行绑定的内容
// console.log('start');
// // 触发 connection 事件
// eventEmitter.emit('connection');
//
// console.log("程序执行完毕。");




// console.log('-------------------------------');
// var fs = require("fs");
//
// fs.readFile('input.txt', function (err, data) {
//    if (err){
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("程序执行完毕");

// 以上程序中 fs.readFile() 是异步函数用于读取文件。 如果在读取文件过程中发生错误，错误 err 对象就会输出错误信息。
// 如果没发生错误，readFile 跳过 err 对象的输出，文件内容就通过回调函数输出。
// 执行以上代码，执行结果如下：
// 程序执行完毕
// qiuqiuqiu 1234
// 接下来我们删除 input.txt 文件，执行结果如下所示：
// 程序执行完毕
// Error: ENOENT, open 'input.txt'
// 因为文件 input.txt 不存在，所以输出了错误信息。



// console.log('-------------------------------');
//event.js 文件
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event', function() {
//     console.log('some_event 事件触发');
// });
// console.log('please waiting 1 second');
// setTimeout(function() {
//     event.emit('some_event');
// }, 1000);



// console.log('-------------------------------');
// //event.js 文件
// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someEvent', function(arg1, arg2) {
//     console.log('listener1', arg1, arg2);
// });
// emitter.on('someEvent', function(arg1, arg2) {
//     console.log('listener2', arg1, arg2);
// });
// emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
//
// 执行以上代码，运行的结果如下：
// listener1 arg1 参数 arg2 参数
// listener2 arg1 参数 arg2 参数




// console.log('-------------------------------');
// var events = require('events');
// var emitter1 = new events.EventEmitter();
// emitter1.on('someEvent',function(){
//     console.log('someone connected!');
//     }
// );
//
// emitter1.once('onceEvent',function(){
//     console.log('Ah, we have our first user!');
//     }
// );
// console.log('someEvent first call')
// emitter1.emit('someEvent');
// console.log('someEvent second call')
// emitter1.emit('someEvent');
//
// console.log('onceEvent first call')
// emitter1.emit('onceEvent');
// console.log('onceEvent second call')
// emitter1.emit('onceEvent');




console.log('-------------------------------');
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");