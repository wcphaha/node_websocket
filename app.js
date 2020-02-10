var ws = require('nodejs-websocket');
var server = ws.createServer(function(conn) {
    console.log("!!!!!!")
    conn.on('error',function(str){
        console.log(str);
    })
    conn.on('text',function(str) {
        var msg = JSON.parse(str);
        console.log(msg)
        if(msg)
        broadcast(JSON.stringify(msg))
        console.log("finish")
    })
    
}).listen(2333)

function broadcast(str) {
    server.connections.forEach(function(conn) {
        conn.sendText(str);
    })
}