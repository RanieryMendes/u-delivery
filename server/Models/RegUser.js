const mongoose = require('mongoose')

const RegUser = mongoose.Schema(
    {
        name:{type: String, required: true},
        studentID:{type: Number, required: true},
        email:{type: String, required: true},
        locationPickUp:{type: String, required: true},
        locationDropOff:{type: String, required: true},
        minutesToReady:{type: Number, required: true},
    }
)

module.exports = mongoose.model('reg_user', RegUser)