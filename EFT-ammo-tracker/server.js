const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ammoCtrl = require('./controllers/ammoCtrl.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MongooseStore');
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo');
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));
app.use((req, res, next) => {
    console.log('req', req.path);
    next();
});

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.use('/ammo', ammoCtrl)

app.listen(3000, () => {
    console.log('Server is listening');
});