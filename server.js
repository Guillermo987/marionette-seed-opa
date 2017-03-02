var connect = require('connect');

var devPort = 5678;

var server = connect()
    .use(connect.static(__dirname))
    .listen(devPort);

console.log('app started on port : ' + devPort);
