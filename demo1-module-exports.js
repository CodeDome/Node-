var http = require('http');
var fun1 = require('./module/otherfunction');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico")//清除二次访问
    console.log('访问');
    // response.write('hello,world!');
    // fun1(response);
   /* fun1.fun2(response);
    fun1.fun3(response);*/
   //用字符串调用对应函数
    /*fun1['fun2'](response);
    fun1['fun3'](response);*/
    funname = 'fun2';
    fun1['fun2'](response);
    // fun1['fun3'](response);
    response.end('结束');//不写则没有http协议尾,但写了会产生两次访问

}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');