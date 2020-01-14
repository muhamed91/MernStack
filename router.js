const express = require('express');
const router = express.Router();
const infoRouter = require("./infoSchema");



// Create 
router.post("/", async (req, res) => {
    let data = new infoRouter({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    })

    await data.save();

    res.json(data);
})



// Get All

router.get('/',async (req, res) => {
    var findData = await infoRouter.find();
    res.json(findData);
})


// Ge One

router.get("/:id",  (req, res) => {
    infoRouter.findById(req.params.id)
        .then(infoFound => {
            if(!infoFound) {return res.status(400).end();}
            return res.status(200).json(infoFound)
        })

})


// Update

router.put("/update", async (req,res) => {
    let update = await infoRouter.update({_id:req.body._id},{$set:{

        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    }});

    res.json(update)
})



// Delete

router.delete("/del/:id", async (req, res) => {
     await infoRouter. findByIdAndRemove(req.params.id).then( e => {
        res.json({message: 'Deleted Successfully'})
    })
})

module.exports = router