var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510});
var data = require('./app/data/data.js');

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    try {
      var json = JSON.parse(message);
      if(json.type) {
        var requestType = json.type;
        var response = {type: requestType, data: data[requestType]};
        ws.send(JSON.stringify(response));
      }
    } catch(ex) {
      console.log(ex);
    }
  });

  ws.on('close', function (code, reason) {
    console.log('Connection closed: %s %d', code, reason)
  });

  ws.on('error', function (error) {
    console.log('Error: %s', error)
  });
});



