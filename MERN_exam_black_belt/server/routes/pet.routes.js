const PetController = require("../controllers/pet.controller");

module.exports = (app)=>{
    // app.get("/api/pet", PetController.test);
    app.get("/api/pet", PetController.findAllPet);
    app.post("/api/pet", PetController.createPet);
    app.get("/api/pet/:id", PetController.findOnePet);
    app.put("/api/pet/:id", PetController.updatePet);
    app.delete("/api/pet/:id", PetController.deletePet);
}