#!/usr/bin/env node
var http = require('http');
var fs = require('fs');
var websocket = require('websocket');
clients = [];
users = [];

var server = http.createServer(function(request, response) {
    var URL = request.url;
    console.log((new Date()) + ' Received request for ' + URL);
    if (URL == '/'){ //Serving the homepage
        fs.readFile('chatpage.html', 'utf8', function(err, data){
            console.log("Homepage served at" + new Date());
            response.write(data);
            response.end();
        });
    }
    else if (URL == '/jquery.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	else if (URL == '/lib/js/config.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	else if (URL == '/lib/js/tether.min.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	else if (URL == '/lib/js/nanoscroller.min.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	else if (URL == '/lib/js/util.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	else if (URL == '/lib/js/jquery.emojiarea.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	 
	else if (URL == '/lib/js/emoji-picker.js'){ //Serving all the other files
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
    else if (URL == '/favicon.ico'){
        fs.readFile(URL.substr(1), 'binary', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            console.log(URL + " served at " + new Date());
            response.write(data);
            response.end();
        });
    }
	
	else if (URL == '/lib/img/blank.gif'){
        var file = 'lib/img/blank.gif';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/gif';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
    }
	
	else if (URL == '/lib/img/emoji_spritesheet_0.png'){
         
			var file = 'lib/img/emoji_spritesheet_0.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
        
    }
	else if (URL == '/lib/img/IconsetSmiles.png'){
         var file = 'lib/img/IconsetSmiles.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
    }
	else if (URL == '/lib/img/IconsetSmiles.png_1x'){
         var file = 'lib/img/IconsetSmiles_1x.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
	}
		  else if (URL == '/lib/img/IconsetW.png'){
         var file = 'lib/img/IconsetW.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
		  else if (URL == '/lib/img/IconsetW_1x.png'){
         var file = 'lib/img/IconsetW_1x.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
		  else if (URL == '/lib/img/emoji_spritesheet_1.png'){
         var file = 'lib/img/emoji_spritesheet_1.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
		  else if (URL == '/lib/img/emoji_spritesheet_2.png'){
         var file = 'lib/img/emoji_spritesheet_2.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
		  else if (URL == '/lib/img/emoji_spritesheet_3.png'){
         var file = 'lib/img/emoji_spritesheet_3.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
		  else if (URL == '/lib/img/emoji_spritesheet_4.png'){
         var file = 'lib/img/emoji_spritesheet_4.png';
          fs.stat(file, function (err, stat) {
                var img = fs.readFileSync(file);
                response.contentType = 'image/png';
                response.contentLength = stat.size;
                response.end(img, 'binary');
		  });
		  }
	else if (URL == '/lib/css/emoji.css'){
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
           response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
        });
    }
	else if (URL == '/css/bootstrap.min.css'){
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
           response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
        });
    }
	else if (URL == '/css/cover.css'){
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
           response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
        });
    }
	else if (URL == '/lib/css/nanoscroller.css'){
        fs.readFile(URL.substr(1), 'utf8', function(err, data){
            if(err){
                console.log(err);
                return;
            }
           response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
        });
    }
    else{
        response.write('Nothing here!');
        response.end();
    }
	
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

var WebSocketServer = websocket.server;

wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('request', function(request) {
    var connection = request.accept('chat-protocol', request.origin);
    var sender = 'Server';
    var message = 'Someone joined the chat';
    json_data = JSON.stringify({'message': message, 'sender': sender});
    for (var i = 0; i < clients.length; i++){
        clients[i].sendUTF(json_data);
    }
    console.log('Broadcasted from admin');
    var client_index = clients.push(connection) - 1;
    console.log((new Date()) + ' Connection accepted from ' + request.origin);
    users[client_index] = 'Anonymous';
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            var data = eval('(' + message.utf8Data + ')');
            var message = data['message'];
            var sender = data['sender'];
            if (sender == 'Server'){
                sender = 'ServerWannabe';
            }
            users[client_index] = sender;
            json_data = JSON.stringify({'message': message, 'sender': sender});
            var test_str = message.replace(/^\s+|\s+$/g,'');
            if(test_str != ''){
                for (var i = 0; i < clients.length; i++){
                    clients[i].sendUTF(json_data);
                }
                console.log('Broadcasted ' + message + ' from ' + sender); //Broadcasted
            }
        }
        else if (message.type === 'binary') { //Pointless in this server
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
        clients.splice(client_index, 1);
        leaving_user = users.splice(client_index, 1)[0]
        var message = leaving_user + ' left the chat!';
        var sender = 'Server';
        json_data = JSON.stringify({'message': message, 'sender': sender});
        for (var i = 0; i < clients.length; i++){
                clients[i].sendUTF(json_data);
        }
        console.log('Broadcasted from admin, ' + leaving_user + ' left chat');
    });
});

