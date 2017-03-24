var connect = require('connect');

var devPort = 5678;

var server = connect()
    .use(connect.static(__dirname))
    .listen(devPort);

console.log('app started on port : ' + devPort);

// var connect = require('connect'),
//     serveStatic = require('serve-static');
//
// var app = connect();
//
// app.use(serveStatic("../angularjs"));
// app.listen(5000);
