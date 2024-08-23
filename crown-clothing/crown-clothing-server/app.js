const express = require('express');

const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
var cors = require('cors')


//importing routes
const usersRoutes = require('./routes/users')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/crown-clothing');
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',() => {
    console.log("Database connected");
});


const app = express();

const port = 8888;

const sessionConfig = {
    secret: 'oli0.0',
    resave: false,
    saveUninitialized: true,
    cookie: {
        HttpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session(sessionConfig));
app.use(flash());


//for passport.js auth
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/',usersRoutes);


app.get('/',(req,res) => {
    res.send('home');
})


app.listen(port,()=>{
    console.log(`listening at port ${port}!`)
});


