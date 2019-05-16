var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

// use Get Method passing parameter
app.get('/process_get', function (req, res) {

   // 输出 JSON 格式
   //  get originalUrl     /process_get?first_name=abc&last_name=def
    console.log(req.originalUrl);
    // get route path      /process_get
    console.log(req.route.path);
    // get method          get
    var method=req.route.stack;
    console.log(method[0].method);
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));     // { first_name: 'abc', last_name: 'def' }
})

// use Post Method passing parameter
app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// var server = app.listen(3456, "127.0.0.1", function () {
var server = app.listen(8081,"127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})




// Route {
//   path: '/process_get',
//   stack:
//    [ Layer {
//        handle: [Function],
//        name: '<anonymous>',
//        params: undefined,
//        path: undefined,
//        keys: [],
//        regexp: /^\/?$/i,
//        method: 'get' } ],
//   methods: { get: true } }
//