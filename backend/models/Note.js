const mongoose = require ('mongoose');

const noteSchema = new mongoose.Schema({
    head: {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    created: {
        type: Date
    }
})

module.exports = mongoose.model ('Note', noteSchema)