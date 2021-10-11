var express = require('express');
var app = express();

var mysql = require('mysql');

var cors = require('cors');

app.use(cors());

function hello_world(req, res){
    res.send("Hwllo world, this is my api!!");
}


app.get('/menu', getmenu);

function getmenu(req,res){
    //step 0
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'UTEC',
        password: '1234567890',
        database: 'restaurant'
    
    });
    // step 1
    connection.connect();

    // step 2
    var myQuery = " SELECT plato_id, name_plato, tipo_plato, created_date, modified_date FROM menu"
    connection.query(myQuery, function(error, results, fields){


        res.send(results);
        connection.end();
    });
}

app.listen(3000, function(){
    console.log("Server starded in port 3000!!!")
})

