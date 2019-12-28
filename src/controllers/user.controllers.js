const userControllers = {};

userControllers.create = (req, res) => {
    const { username, password, email } = req.body;
    if(username == undefined || password == undefined || email == undefined || username == "" || password == "" || email == ""){
        res.json({ status : 'error', message: 'Fields required', code: '500' });
    }else{
        res.send('Oks');
    }
}

module.exports = userControllers;