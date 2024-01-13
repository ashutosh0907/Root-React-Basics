var express = require('express')
var router = express.Router();
var mysql = require('mysql');

router.post('/std-insert-marks', function (req, res) {
    const { uid, name, marks } = req.body;
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'school',
        port: 3307,
    })
    con.connect(function (error, success) {
        if (error) {
            res.send('connection error');
        } else {
            var q = `INSERT INTO marks(uid, name, marks) VALUES ('${uid}', '${name}', ${marks})`;
            con.query(q, function (error, success) {
                if (error) {
                    res.send('INSERT ERROR');
                } else {
                    res.send('INSERT SUCCESS');
                }
            })
        }
    })
});

router.post('/get-sum', function (req, res) {
    const { num1, num2 } = req.body;
    let sum = parseInt(num1) + parseInt(num2)
    console.log(sum)
    res.send(`sum is ${sum}`);
})


module.exports = router;
