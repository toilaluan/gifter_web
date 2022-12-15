const mysql = require('mysql')
class LoginController{
    index(req, res){
        res.render("login")
    }
    login(req, res){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;

        const con = mysql.createConnection({
            host: "localhost",
            user: "admin",
            password: "admin",
            database: 'gifter'
        })
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });

        console.log(req.body)
        let username = req.body.username
        let password = req.body.password
        // let phone = req.body.phone
        var sql = `select password from users where username='${username}'`
        console.log(sql)
        con.query(sql, function (err, result) {
            if (err) throw err;
            let real_password = result[0].password
            if (real_password == password){
                res.render("news")
            }
          })
        
    }
}
module.exports = new LoginController()