/**
 * Created by wangsh on 2016/3/17.
 */
var mysql = require('mysql');
var DB_NAME = 'mi';

var pool  = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'able@2015',
    port     : '3306',
    database : 'mi'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function User(user){
    this.username = user.username;
    this.userpass = user.userpass;
}
module.exports = User;

pool.getConnection(function(err, connection) {

    console.log(pool);

   // var useDbSql = "USE " + DB_NAME;
  //  connection.query(useDbSql, function (err) {
   //     if (err) {
   //         console.log("USE Error: " + err.message);
    //        return;
   //     }
    //    console.log('USE succeed');
   // });

    //��������
    User.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            userpass: this.userpass
        };

        var insertUser_Sql = "INSERT INTO userinfo(id,username,userpass) VALUES(0,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpass],
            function (err,result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            connection.release();

            console.log("invoked[save]");

            callback(err,result);
        });
    };

    //�����û����õ��û�����
    User.getUserNumByName = function getUserNumByName(username, callback) {


        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE username = ?";

        console.log(getUserNumByName_Sql);
        connection.query(getUserNumByName_Sql, [username], function (err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            connection.release();

            console.log( result );

            callback(err,result);
        });
    };

    //�����û����õ��û���Ϣ
    User.getUserByUserName = function getUserByUserName(username, callback) {

        var getUserByUserName_Sql = " SELECT * FROM userinfo WHERE username = ? ";

        connection.query( getUserByUserName_Sql , [username], function (err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err,result);
        });
    };

});