const express = require('express');
const ejs = require('ejs');
const path = require('path');
const session = require('express-session');
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(session({ secret: 'sjdkjsakdjsdaj12' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

var name = 'admin';
var password = '123456';

app.post('/', (req, res) => {
    if (req.body.name == name && req.body.password == password) {
        // Logado com sucesso!!
        req.session.name = name;

        res.redirect('/');

    } else {
        res.render('index');
    }
})

app.get('/', (req, res) => {
    if (req.session.name) {
        res.render('loginSucess')
    } else {
        res.render('index');
    }
})

app.listen(PORT, () => {
    console.log("Server is running...")
})