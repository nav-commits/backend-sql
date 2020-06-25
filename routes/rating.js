const express = require('express')
const router = express.Router()
const Movie = require("../database/movie");

//post movie
router.post('/rating', (req,res) =>{
    const title = req.body.title;
    const rating = req.body.rating;
    Movie.create({
    title: title,
    rating: rating
    })
    .then(result=>{
        console.log(result);
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    });
})

// get movies all
router.get('/rating',(req,res)=>{
    Movie.findAll()
    .then(result =>{
        console.log(result);
        res.send(result);
    })
    .catch(err =>{
        console.log(err);
    });
   
});

// get by id 

router.get('/rating/:id',(req,res)=>{
    const finder = req.params.id;
    Movie.findByPk(finder)
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    });
});


// update movie by id
router.put('/rating/:id', (req,res) =>{
    // const id = req.params.id;
    Movie.update({
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


// delete movie id
router.delete('/rating/:id', (req,res) =>{
    Movie.destroy({
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