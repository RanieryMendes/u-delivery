const mongoose = require('mongoose')

const RegCarrier = mongoose.Schema(
    {
        name:{type: String, required: true},
        studentID:{type: Number, required: true},
        email:{type: String, required: true},
        locationPickUp:{type: Array, required: true},
        locationDropOff:{type: Array, required: true},
        
    }
)

module.exports = mongoose.model('reg_carrier', RegCarrier)