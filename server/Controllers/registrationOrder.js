const RegOrder = require('../Models/RegOrder')

const Registration_Order = async(req, res) =>{

    console.log("Let people now I am registering order")

    try{

        let newOrder = await new RegOrder({

            id : req.body.id,
            name: req.body.name,
            email: req.body.email,
            locationPickUp: req.body.locationFrom,
            locationDropOff:req.body.locationTo,
            price: req.body.price,
            eta: req.body.eta,
            

        }).save()

        res.status(200).send("Order Registered")
    }catch(err){
        
        res.status(400).send("There was an error. ", err)
    }
        
}




module.exports= Registration_Order