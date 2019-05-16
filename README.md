```
Node.js 概述
Node.js 是一个能够在服务器端运行 JavaScript 的开放源代码、跨平台 JavaScript 运行环境。
Node.js 由 Node.js 基金会持有和维护，并与 Linux 基金会有合作关系。Node.js 采用 Google 
开发的 V8 运行代码，使用事件驱动、非阻塞和异步输入输出模型等技术来提高性能，可优化应用
程序的传输量和规模。这些技术通常用于数据密集的即时应用程序。

Node.js 大部分基本模块都用 JavaScript 语言编写。在 Node.js 出现之前，JavaScript 通常作
为客户端程序设计语言使用，以 JavaScript 写出的程序常在用户的浏览器上运行。Node.js 的出
现使 JavaScript 也能用于服务端编程。Node.js 含有一系列内置模块，使得程序可以脱离 
Apache HTTP Server 或 IIS，作为独立服务器运行。


Node.js 特点
它是一个 JavaScript 运行环境。

依赖于 Chrome V8 引擎进行代码解释。

事件驱动：
在 Node 中，客户端请求建立连接，提交数据等行为，会触发相应的事件。在 Node 中，
在一个时刻，只能执行一个事件回调函数，但是在执行一个事件回调函数的中途，可以转而处理其他事件，
然后返回继续执行原事件的回调函数。

非阻塞 I/O：
Node.js 中采用了非阻塞型 I/O 机制，在执行了访问数据库的代码之后，将立即转而执行其后面的代码，
把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率。

轻量可伸缩，适用于实时数据交互应用。

单线程：
好处是减少内存开销，不用像多线程编程那样处处在意状态同步的问题。缺点是错误会引起整个应用退出。


Node.js 适用场景
我们从 Node.js 的特点中可以知道 Node.js 擅长处理 I/O，不善于计算（单线程的缺点），因此 Node.js 
适用于：当应用程序需要处理大量并发的 I/O，而在向客户端发出响应之前，应用程序内部并不需要进行非常
复杂的处理的时候，Node.js 也非常适合与 web socket 配合，开发长连接的实时交互应用程序。
比如：聊天室，博客系统，考试系统等。


复制拷贝文件 服务器到本地，本地到服务器的方法
scp -p 22 ./data.sql root@远程ip地址:/root //把data.sql文件上传到 远程服务器的 /root目录下  
実際コマンド　直下txtファイルをリモートホストの/home/t-lqiuにコピーします。
scp -p 22 ./1.txt ssh catalog-test.ogk.ynwm.yahoo.co.jp:/home/t-lqiu

从服务器下载整个目录 scp -r username@servername:/root/（远程目录） /Users/mac/Desktop（本地目录）
例如:scp -r root@192.168.0.101:/root/ /Users/mac/Desktop/
実際コマンド
scp -r ssh catalog-test.ogk.ynwm.yahoo.co.jp:/home/t-lqiu/node-proxy /Users/t-lqiu/node

上传目录到服务器 scp -r local_dir username@servername:remote_dir
例如：scp -r test root@192.168.0.101:/root/ 把当前目录下的test目录上传到服务器的/root/ 目录
注：目标服务器要开启写入权限。


req explain
http://expressjs.com/en/api.html#req

Node.js v10.15.3 Documentation
https://nodejs.org/dist/latest-v10.x/docs/api/https.html

Node.js

Node.js 基础课程
https://www.shiyanlou.com/courses/44

Node.js包教不包会
https://www.shiyanlou.com/courses/493

Node.js 教程    这个教程不错，比较适合  推荐优先学习
http://www.runoob.com/nodejs/nodejs-tutorial.html

Node.js 安装方法
http://www.runoob.com/nodejs/nodejs-install-setup.html


ubuntu安装nodejs并升级到最新版本
https://www.centos.bz/2017/11/ubuntu%E5%AE%89%E8%A3%85nodejs%E5%B9%B6%E5%8D%87%E7%BA%A7%E5%88%B0%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC/

Ubuntu下面安装npm     建议优先安装npm，更新到最新软件list表状态
sudo apt-get install npm

node.js: cannot find module 'request'    这个很重要 安装module  npm使用方法
https://stackoverflow.com/questions/16482600/node-js-cannot-find-module-request

nodejs 重定向 (redirect + writeHead(Location))
https://www.cnblogs.com/gamedaybyday/p/6639077.html
https://itbilu.com/nodejs/npm/EJD5cyg3l.html#redirect

Node.js使用request模块让http请求变简单
https://itbilu.com/nodejs/npm/NJLUyVB7.html

Ubuntu下面安装node
sudo apt-get install node

卸载模块
我们可以使用以下命令来卸载 Node.js 模块。
$ npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
$ npm ls

更新模块
我们可以使用以下命令更新模块：
$ npm update express

搜索模块
使用以下来搜索模块：
$ npm search express

在本地node程序的目录运行下面的命令
rm -rf node_modules/     删掉node_modules 目录下面所有的包
npm cache clean       清除缓存内容
npm install           重新安装npm依赖包
安装所有必需的依赖关系。
---------------------------------------------------------------------------------------

Ruby on Rails

Ruby基础教程
https://www.shiyanlou.com/courses/13

Rails基础入门
https://www.shiyanlou.com/courses/103


Ruby 中文文档
https://www.ruby-lang.org/zh_cn/documentation/


rails框架了解
	安装ruby 和 rails
	http://railsinstaller.org/en

	https://guides.rubyonrails.org/v5.1/getting_started.html     ok


如何快速正确的安装 Ruby, Rails 运行环境
https://ruby-china.org/wiki/install_ruby_guide


Ubuntu下面安装ruby
sudo apt-get install ruby

安装完ruby后更新一下Ubuntu的状态
sudo apt-get update

update更新后在Ubuntu下面安装Rails
sudo apt-get install Rails


Express 4.x API 中文文档
https://www.runoob.com/w3cnote/express-4-x-api.html


Express 高度包容、快速而极简的 Node.js Web 框架　中国語
http://expressjs.com/zh-cn/

```