var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact', websiteTitle: 'Basic Website' });
});


router.post('/send', function(req, res, next) {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'password'
        }
    });
    var mailOptions = {
        from: 'John Doe <johndoe@outlook.com>',
        to: 'example@gmail.com',
        subject: 'Test',
        text: 'Test from node mailer, name: '+req.body.name+', email: '+req.body.email+'\n '+req.body.message,
        html: '<h1>Hello!</h1><p>'+req.body.name+', email: '+req.body.email+'\n '+req.body.message+'</p>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent', info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
