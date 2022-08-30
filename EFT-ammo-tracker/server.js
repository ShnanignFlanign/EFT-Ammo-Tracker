const express = require('express');
const app = express();
const methodOverride = require('method-override');
const ammoCtrl = require('./controllers/ammoCtrl.js');


//process.env.port needed for heroku deployment. put it here
require('dotenv').config()
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/MongooseStore');
// mongoose.connection.once('open', () => {
//     console.log('Connected to Mongo');
// });
mongoose.connect(mongodbURI);
mongoose.connection.once('open', () => {
    console.log('Connected to Atlas');
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

app.listen(PORT, () => {
    console.log('Server is listening');
});