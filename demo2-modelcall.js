var http = require('http');
var User = require('./module/User');
var Teacher = require('./module/Teacher');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico")//清除二次访问
      teacher = new Teacher(1,'Jason',20);
      teacher.enter();
      teacher.teach(response);
      // user = new User(1,'Jason',20);
      /*user.id =1;
      user.name = 'jason';*/
      // user.enter();
    response.end('');//不写则没有http协议尾,但写了会产生两次访问

}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');