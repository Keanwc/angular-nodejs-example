var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var port = 3080;
var users = [];
app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/my-app/dist/angular-nodejs-example/"));
app.get('/api/users', function (req, res) {
    res.json(users);
});
app.post('/api/user', function (req, res) {
    var user = req.body.user;
    users.push(user);
    res.json("user addedd");
});
app.get('/', function (req, res) {
    res.sendFile(process.cwd() + "/my-app/dist/angular-nodejs-example/index.html");
});
app.listen(port, function () {
    console.log("Server listening on the port::" + port);
});
