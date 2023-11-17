const {Schema, model} = require("mongoose");

const Set = new Schema ({
    name: {type: String, required: true, unique: true},
    discription: {type: String, required: true},
    alias: {type: String, required: true, unique: true}
})

module.exports = model("Set", Set);