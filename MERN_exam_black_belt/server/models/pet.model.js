const mongoose = require("mongoose"); //import mongoose

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Pet name is REQUIRED!"],
        minlength: [3, "Name must be at LEAST 3 characters long!"]
    },
    type:{
        type: String,
        required: [true, "Pet type is REQUIRED"],
        minlength: [3, "Type must be at LEAST 3 characters long!"]
    },
    description:{
        type: String,
        required: [true, "Pet description is REQUIRED"],
        minlength: [3, "Description must be at LEAST 3 characters long!"]
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    }
}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;