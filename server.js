var http=require("http");
var url=require("url");

function start(route,handle){
function onRequest(request,response){
console.log("Request has been received.");
var pathname=url.parse(request.url).pathname;
console.log("Request for "+ pathname +" has been received.");

route(handle,pathname);

response.writeHead(200,{"Content-Type":"text/plain"});
response.write("Hello World. !");
response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server has started.");
}

exports.start=start;
