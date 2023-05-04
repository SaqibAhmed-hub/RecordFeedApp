var mongoose = require('mongoose');

const recordsSchema = mongoose.Schema({
    fullname : {
        type : String,
        required: true
    },
    position : {
        type : String
    },
    level : {
        type: String
    },
    createdAt : {
        type: Date
    }

})

module.exports = mongoose.model('records',recordsSchema);