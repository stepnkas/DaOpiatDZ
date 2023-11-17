const { model, Schema, ObjectId } = require('mongoose');

const Card = new Schema ({
    frontside: {type: String, required: true},
    backside: {type: String, required: true},
    set_id: {type: ObjectId, ref: 'Set'},
})

module.exports = model('Card', Card)