/**
 * Created by wangsh on 2016/3/17.
 */
var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '127.0.0.1',       //����
    user     : 'root',               //MySQL��֤�û���
    password : 'able@2015',        //MySQL��֤�û�����
    port: '3306',                   //�˿ں�
    database:'mi',
    charset:'utf8'
});

pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM office;', function(err, result) {
        console.log(result);
        connection.release();
    });

    connection.query( 'SELECT * FROM office;', function(err, result) {

        console.log(result);
        connection.release();

    });
});