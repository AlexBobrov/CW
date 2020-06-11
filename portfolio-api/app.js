const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('api.afloo', (req, res, next) => {
    res.send('API Status: DO')
});


app.post('http://api.afloo/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'alexandr-alexandrovich2013@yandex.ru',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');