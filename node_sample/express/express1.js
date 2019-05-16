//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {

    // req.hostname / req.ip：获取主机名和IP地址
    var hostname= req.hostname;
    var ip=req.ip;
    // req.originalUrl：获取原始请求URL
    var originalurl=req.originalUrl;
    res.send("hello word"+hostname.toString()+ip.toString()+originalurl.toString());

})

app.get('/qiu', function (req, res) {
   res.send('Hello World qiu');
})

app.get('/redirect', function (req, res) {
    res.redirect('http://www.yahoo.co.jp');
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})