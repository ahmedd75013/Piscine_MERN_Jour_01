const router = require('express').Router();
const Ex = require("../models/ex.model");


router.route('/').get((req ,res) =>{
    Ex.find()
    .then(ex => res.json(ex))
    .catch(err => res.status (400).json('Error:' + err));

});

router.route('/add').post((req,res) =>{
    const description = req.body.description;
    const titre = req.body.titre;


    const newEx = new Ex({

        description,
        titre,
    });

    newEx.save()
    .then(()=> res.json('add'))
    .catch(err =>res.status(400).json('Eror:' +err));
});

router.route('/:id').get((req,res) => {
    Ex.findById(req.params.id)
    .then(ex => res.json(ex))
    .catch(err => res.status(400).json('Eroor : +err'));
});

router.route('/:id').delete((req,res) => {
    Ex.findByIdAndDelete(req.params.id)
    .then(()=> res.json(" post delete "))
    .catch(err => res.status(400).json('Eroor : +err'));
});

router.route('/update/:id').post((req,res) => {
    Ex.findById(req.params.id)
    .then( ex =>{
      
        ex.description = req.body.description;
        ex.titre = req.body.titre;

        ex.save()
        .then(() => res.json("Post updatet !"))
        .catch(err => res.status(400).json('error : +err'));
    })

    .catch(err =>res.status(400).json('Error :+err'));

});





module.exports = router;