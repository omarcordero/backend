const userControllers = {};
const mysql = require('../connection/database');

userControllers.signup = (req, res) => {
    const { username, password, email } = req.body;
    if(username == undefined || password == undefined || email == undefined || username == "" || password == "" || email == ""){
        res.json({ status : 'error', message: 'Fields required', code: '500' });
    }else{
        const sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?);";
        mysql.query(sql, [username, password, email], (err, result) => {
            if(err){ res.json({ status : 'error', message: 'Error: '+err, code: '400' }); }
            else{ res.json({ status : 'success', message: 'User create successfully!', code: '200' }); }
        });
    }
}

userControllers.signin = (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? and password = ?";
    if(email == undefined || password == undefined || email == "" || password == ""){
        res.json({ status : 'error', message: 'Fields required', code: '500' });
    }else{
        mysql.query(sql, [email, password], (err, result) => {
            if(err){ res.json({ status : 'error', message: 'Error: '+err, code: '400' }); }
            else{
                if(result[0] == undefined){
                    res.json({ status : 'error', message: 'Email o Password incorrect!', code: '500' });
                }else{
                    res.json({ status : 'success', message: 'User query success!', data: result, code: '200' });
                }
            }
        });
    }
}

module.exports = userControllers;