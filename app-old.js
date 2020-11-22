const http=require('http');

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-type':'application/json'});
    let salida={
        name: 'Leonardo',
        age: 19,
        band: 'Queens of the Stone Age',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');