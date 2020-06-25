const express = require('express')
const router = express.Router()

// gets the ratings
router.get('/', (req,res) =>{
    res.render('home', {path:'home'})
});


module.exports = router