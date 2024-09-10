require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local');
var cors = require('cors')


//importing routes
const usersRoutes = require('./routes/users')
const productsRoutes = require('./routes/products')
const categoriesRoutes = require('./routes/categories')

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open',() => {
    console.log("Database connected");
});

//
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 3000;

const sessionConfig = {
    secret: process.env.SESSION_SECRET,
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
app.use(express.static("public"));
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
app.use('/products',productsRoutes);
app.use('/categories',categoriesRoutes);


app.get('/',(req,res) => {
    res.send('home');
});

const calculateOrderAmount = (items) => {
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    let total = 0;
    items.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

app.post("/create-payment-intent", async (req, res) => {
    try{
        const {amount} = req.body;

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'cad',
            payment_method_types: ['card']
        });
        res.status(200).json({clientSecret: paymentIntent.client_secret});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});


app.listen(port,()=>{
    console.log(`listening at port ${port}!`)
});


