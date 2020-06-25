const express = require('express')
const router = express.Router()
const Users = require("../database/Users");

// renders the page
router.get('/register', (req,res) =>{
    res.render('Signup',{
    path:'Signup'})

});

// posts signup
router.post('/register', (req,res) =>{
    const name = req.body.name;
    const password = req.body.password;
    Users.create({
    name: name,
    password: password
    })
    .then(result=>{
        console.log(result);
       
    })
    .catch(err=>{
        console.log(err);
    });

});

// gets all users
router.get('/register',(req,res)=>{
    Users.findAll()
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
    
});

// find by id
router.get('/register/:id',(req,res)=>{
    const finder = req.params.id;
    Users.findByPk(finder)
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
});


// this is where login will added
router.post('/login', (req,res) =>{
    res.status(200)

});

// update user
router.put('/register/:id', (req,res) =>{
    // const id = req.params.id;
    Users.update({
      name: req.body.name,
      password: req.body.password

    },{
            where: 
                {id: req.params.id}
                     
    })
    .then(result =>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err => {
        console.log(err)
    });
  
});

// delete user
router.delete('/register/:id', (req,res) =>{
    Users.destroy({
        where: {
            id: req.params.id
          }
    })
    .then(result =>{
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    });
    
});

module.exports = router