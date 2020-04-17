var mysql = require('mysql');
var http = require("http");
var url = require("url");
const querystring = require('querystring');
// 建立連線
var conn = mysql.createConnection({
host : '127.0.0.1',
user : 'root',
password : '123456',
database : 'kukulogin'
});
// 建立連線後不論是否成功都會呼叫
conn.connect(function(err){
if(err) throw err;
console.log('connect success!');
});
// 其他的資料庫操作，位置預留
conn.query('SELECT * FROM `member` WHERE account='$username' AND password='$password'', function(err, result, fields){
if(err) throw err;
console.log(result);
});
console.log( 'select ended!' );
// 關閉連線時呼叫
conn.end(function(err){
if(err) throw err;
console.log('connect end');
})