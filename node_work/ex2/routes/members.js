var express = require('express');
var router = express.Router();  // 경로를 요청했을 때 처리

var mysql = require('mysql'); // mysql 사용

var pool  = mysql.createPool({
   host     : 'localhost',
   user     : 'root',
   password : '1234',
   database : 'exam1' // db명
});

/* GET users listing. */
router.get('/', function(req, res, next) {  // members/join이 요청 될 때 처리 get형식 페이지 보여주기
  //res.send('members/join 입니다.');\
  res.render('main', {title:'메인화면'});
});
router.get('/join', function(req, res, next) {  // members/join이 요청 될 때 처리 get형식 페이지 보여주기
  //res.send('members/join 입니다.');\
  res.render('join', {title:'회원가입'});
});

//메인화면
router.get('/main', function(req,res,next){
 res.render('main', {title : '메인화면'});
});

//로그인 처리
router.get('/login', function(req,res,next){
 res.render('login', {title : '로그인'});
});

//login하고 메인페이지 이동
router.post('/login', function(req,res,next){
  console.log('req.body',req.body);
  // res.json({"result" : "success"}); // dummy
  pool.getConnection(function(err,conn){ //db 연결
    conn.query('select count(*) from member where id=? and passwd=?', [req.body.id, req.body.passwd], function(err, rows){
      if(err){
        console.log('err',err);
      }
      console.log('rows',rows);
      // res.json({"result":rows});
      if(rows.affectedRows == 1){
        //res.json({"result":"success"}); // 모바일 서버 성공시
        res.redirect('/members/main'); // /members/jang
      }else{
        //res.json({"result" : "fail"}); // 모바일 서버 실패시
        res.end('<head><meta charset="utf-8"><script>alert("아디나 비번이 잘못됨 에러가발생함");history.back();</script>');
      }
    });
  });
});


//※ 로그인 처리
router.get('/:id', function(req,res,next){ // /members/id
 console.log('req.params.id',req.params.id);
 res.json({"id" : req.params.id });
});


router.get('/withdraw/:id', function(req,res,next){

 var id = req.params.id;

 console.log('req.params.id', req.params.id);

 res.render('withdrawform',{ id : id, title : "회원 탈퇴" });

});

router.post('/withdraw', function(req,res,next){
 console.log('req.body', req.body);
 var id = req.body.id;
 var passwd = req.body.passwd;
 pool.getConnection(function(err,conn){
  var sql = "update member set withdraw='Y' where id=? and passwd=?";
  var data = [id,passwd];
  conn.query(sql, data, function(err,row){
   if(err){
    console.log('err',err);
   }
   console.log('row',row);
   if(row.affectedRows==1){
    res.json({"result":"ok"});
   }else{
    res.json({"result":"no"});
   }
  });
 });
});



router.post('/join', function(req,res,next){
  //넘어온 값 받기
  console.log('req.body',req.body);
  
  //id, passwd, name, email, tel, address, job, gender, birth, regdate, modidate, withdraw
  var id     = req.body.id;
  var passwd = req.body.passwd;
  var name   = req.body.name;
  var email  = req.body.email;
  var tel    = req.body.tel;
  var address = req.body.address;
  var job    = req.body.job;
  var gender = req.body.gender;
  var birth  = req.body.birth;
  
  pool.getConnection(function(err,conn)
  {
    if(err) {
      console.log('err',err);
      res.json(err);
    }
    else {
      console.log('conn',conn);
      var sql = "insert into member(id, passwd, name, email, tel, address, job, gender, birth, regdate, modidate, withdraw) values(?,?,?,?,?,?,?,?,?,now(),now(),'N')";
      var data = [id, passwd, name, email, tel, address, job, gender, birth];
      conn.query(sql, data, function(err,row){
        if(err)
        {
          console.log('err',err);
          res.json(err);
        } else {
          consol.log('row',row);
          res.json({"resule":row});
        }
      })
      res.json(req.body);
    }
  });
  // var data = { "result" : "success"};더미더미
  // res.json(data); 더미더미
});




module.exports = router;


//[출처] node.js 게시판 만들기 LOGIN|작성자 문지
//http://blog.naver.com/jymoon12345/220322395748