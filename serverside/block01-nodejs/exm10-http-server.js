var http = require('http');
var fs = require('fs');

var server = http.createServer(enviarImagen);
function enviarImagen(request,response){
    response.writeHead(200,{'content-type':'image/jpg'});
    fs.createReadStream("test/images/ejm10-http-imagen.jpg").pipe(response);
    //stream | response - concatenaciones
}
console.log("Servidor escuchando por el puerto 8888");
server.listen(8888);
/* 
API Nodejs: https://nodejs.org/dist/latest-v6.x/docs/api/http.html


*/