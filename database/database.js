"use strict";

const mysql = require("mysql");

const local = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "11111111",
    database: "picup_app"
};

// heroku credentials
const config = {
    host: "us-cdbr-iron-east-02.cleardb.net",
    port: 3306,
    user: "b1af61c8ef2961",
    password: "39f1c8d7",
    database: "heroku_fcb985ff8a841f0"
};

var connection = mysql.createConnection(config);
connection.connect(function (err) {
    if (err) console.log(err);
    console.log("Database Connected: " + config.host + ":" + config.port);
});

module.exports = connection;