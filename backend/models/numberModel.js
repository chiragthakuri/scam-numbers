const mongoose = require('mongoose')

const Schema = mongoose.Schema

const numberSchema = new Schema({
    phone_number:{
        type: Number,
        required: true
        
    },
    description:{
        type: String
       
    },
    country_of_origin:{
        type: String
    },

    displayFlag:{
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Number', numberSchema)



