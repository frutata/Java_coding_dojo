const Pet = require("../models/pet.model");

module.exports.test = (req, res) => {
    res.json({
        msg: "Testing Pet API"
    });
}

module.exports.findAllPet = (req, res) => {
    Pet.find()
        .then(allPet => {
            res.json({ results: allPet })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find all Pet!", error: err })
        })
}
module.exports.createPet = (req, res) => {
    //req.body represents form information
    Pet.create(req.body)
        .then(createdPet => {
            res.json({ results: createdPet })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to create a Pet!", error: err })
        })
}
module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(foundPet => {
            console.log(foundPet);
            console.log(req.params.id);
            res.json({ results: foundPet })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to find one Pet!", error: err })
        })
}
module.exports.updatePet = (req, res) => {
    Pet.updateOne({ _id: req.params.id }, //specify which Pet to update
        req.body, //specify the form info to update the quote with
        { new: true, runValidators: true })
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to update a Pet!", error: err })
        })
}
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deletedPet => {
            res.json({ results: deletedPet })
        })
        .catch(err => {
            res.json({ msg: "An error occured when trying to delte a Pet!", error: err })
        })
}
