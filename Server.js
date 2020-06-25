const express = require("express");
const app = express();
const users = require('./routes/users');
const rating = require('./routes/rating');
const home = require('./routes/home');
const bodyParser = require('body-parser');
const sequelize = require("./database/Users");
const sequelizetwo = require("./database/movie");
let port  = 4000;

// user
sequelize.sync().then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
});

/// movie
sequelizetwo.sync().then(result => {
    console.log(result)
})
.catch(err => {
    console.log(err)
});

// parsing data for forms
app.use(bodyParser.urlencoded({exnteded:false}));

// this is for middleware functions for routes
app.use('/',home)
app.use('/users',users)
app.use('/movie',rating)


// need to add a html page not found file here
app.use((req,res,next)=>{
    res.status(400).render('404',{pageTitle:'page not found', path:'404'});
});

// need port for development and production
app.listen(port);


