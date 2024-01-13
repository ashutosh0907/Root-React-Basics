var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET users listing. */
router.post('/std-reg', function (req, res, next) {
    const { name, uid, pwd, gender, hobbies, country, address } = req.body;
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'school',
        port: 3307
    })
    con.connect(function (error, success) {
        if (error) {
            res.send('db connection error');
        } else {
            var q = `INSERT INTO student(name,uid,pwd,gender,hobbies,country,address) VALUES ('${name}','${uid}','${pwd}','${gender}','${hobbies}','${country}','${address}')`
            con.query(q, function (error, success) {
                if (error) {
                    res.send(`${error}`);
                } else {
                    res.send(`${success.affectedRows}`);
                }
            })
        }
    });
});


router.get('/get-std', function (req, res, next) {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'school',
        port: 3307
    });
    con.connect(function (err, suc) {
        if (err) {
            res.send('db conn error')
        } else {
            var q = "SELECT * FROM student";
            con.query(q, function (e, r) {
                if (e) {
                    res.send('query error')
                } else {
                    res.send(r)
                }
            })
        }
    })
})

router.post('/std-edit', function (req, res, next) {
    const { id, name, uid, pwd, gender, hobbies, country, address } = req.body;
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'school',
        port: 3307
    });
    con.connect(function (err, suc) {
        if (err) {
            res.send(err)
        } else {
            var q = `UPDATE student SET name='${name}', uid='${uid}', pwd='${pwd}', gender='${gender}',hobbies='${hobbies}',country='${country}',address='${address}' WHERE id=${id}`;
            console.log("QUERY", q)
            con.query(q, function (e, r) {
                if (e) {
                    res.send("query error");
                } else {
                    res.send(r);
                }
            })
        }
    })
})

router.get('/std-delete', function (req, res, next) {
    const { id } = req.query;
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'school',
        port: 3307,
    })
    con.connect(function (err, suc) {
        if (err) {
            res.send('db connection err');
        } else {
            var q = `DELETE FROM student WHERE id=${id}`;
            con.query(q, function (e, r) {
                if (e) {
                    res.send('query error');
                } else {
                    res.send(r);
                }
            })
        }
    })

})

router.get('/get-name', function (req, res, next) {
    res.send(`Hello World`);
});



module.exports = router;