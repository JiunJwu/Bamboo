var http = require("http");
var url = require("url");
const querystring = require('querystring');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
	
	route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/html"});
    if (pathname==="/Signup"){
      user = url.parse(request.url,true).query;
      response.write("<h1>" +user.username+ " welcome</h1><p>我們已經將會員啟用信寄至" + user.email + "</p>");
      response.end();
     }
    else{
      response.write("Hello World,Node.js");
      response.end();
    }    
    
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started. time is:"+ new Date());
}

exports.start = start;

