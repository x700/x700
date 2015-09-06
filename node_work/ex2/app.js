var express = require('express'); // node_modules에 express폴더에 들어 있는 index.js를 호출
var path    = require('path'); // 경로 관리
var favicon = require('serve-favicon'); // 경로 옵션
var logger  = require('morgan'); //log를 남겨줌
var cookieParser = require('cookie-parser'); // 쿠키를 처리
var bodyParser = require('body-parser'); // http가 전송 될때 바디를 처리


var routes = require('./routes/index');
var users = require('./routes/users');
var members = require('./routes/members');

var app = express(); //express 객체 생성

// view engine setup
app.set('views', path.join(__dirname, 'views')); // 어떤 view를 사용 할 것인지 현재 폴더에 있는 views를 사용
app.set('view engine', 'ejs'); // view engine을 ejs를 쓰겟다. 기본값은 jade


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // 개발 모드 에러 메시지 볼수 있음, product모드
app.use(bodyParser.json()); // bodyparser가 json 관련 처리를 해줌
app.use(bodyParser.urlencoded({ extended: false })); // urlencoding 해줌
app.use(cookieParser()); // 쿠키 파서
app.use(express.static(path.join(__dirname, 'public'))); // 정적인 데이터 설정 /  현재 폴더의 public


app.use('/', routes);
app.use('/users', users);
app.use('/members', members);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});// 404 에러가 떳을때 에러 메시지

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500); // 404가 아니면 500
    res.render('error', { // error.ejs가 생략 render 이하 json
      message: err.message, // error 발생시 views에 error.ejs로 감 stack
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) { // product 모드 일떄
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {} //에러 메시지를 감춤
  });
});

var http = require('http');
app.set('port',3000);
var server = http.createServer(app);
server.listen(app.get('port'));

console.log('서버가 ' + app.get('port') + '번 포트에서 실행중입니다.');


module.exports = app;
