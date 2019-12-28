const postControllers = {};
const mysql = require('../connection/database');

postControllers.create = (req, res) => {
    const { title, description, user_id } = req.body;
    if(title == undefined || description == undefined || user_id == undefined || title == "" || description == "" || user_id == 0){
        res.json({ status : 'error', message: 'Fields required', code: '500' });
    }else{
        const sql = "INSERT INTO post (title, description, user_id) VALUES (?, ? ,?);";
        mysql.query(sql, [title, description, user_id], (err, result) => {
            if(err){ res.json({ status : 'error', message: 'Error: '+err, code: '400' }); }
            else{ res.json({ status : 'success', message: 'Post created!', code: '200' }); }
        });
    }
}

postControllers.read = (req, res) => {
    const { user_id } = req.params;
    const sql = "SELECT p.post_id, p.title, p.description, u.user_id, u.username FROM post p INNER JOIN users u ON u.user_id = p.user_id WHERE u.user_id = ?";
    mysql.query(sql, user_id, (err, result) => {
        if(err){ res.json({ status : 'error', message: 'Error: '+err, code: '400' }); }
        else{ res.json({ status : 'success', message : 'Post query successfully!', data : result, code : '200' }); }
    });
}

module.exports = postControllers;