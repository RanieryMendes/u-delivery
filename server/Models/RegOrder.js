const mongoose = require('mongoose')

const RegOrder = mongoose.Schema(
    {
        id :{type:String, required: true},
        name:{type: String, required: true},
        email:{type: String, required: true},
        locationPickUp:{type: Array, required: true},
        locationDropOff:{type: Array, required: true},
        price:{type: Number, required: true},
        eta:{type:Number, required: true}
        
    }
)

module.exports = mongoose.model('reg_order', RegOrder)