const RegUser = require('../Models/RegUser')
const RegCarrier = require('../Models/RegCarrier')
const RegOrder = require('../Models/RegOrder')
const fetch = require('node-fetch');

const Registration_User = async(req, res) =>{

  

    try{

        let newUser = await new RegUser({

            name: req.body.name,
            studentID: req.body.studentID,
            email: req.body.email,
            locationPickUp: req.body.locationFrom,
            locationDropOff:req.body.locationTo,
            minutesToReady: req.body.minutesToReady


        }).save()
    }catch(err){
        
        res.status(400).send("There was an error. ", err)
    }
        let locationFrom = req.body.locationFrom
        let locationTo = req.body.locationTo

  
        try{

          
            let getCarrier = await RegCarrier.find({"locationPickUp.name": locationFrom, "locationPickUp.checked":true})


           
            let checkItCanDeliver = await RegCarrier.find({"locationDropOff.name": locationTo, "locationDropOff.checked":true})


            if(checkItCanDeliver.length == 0){
                res.status(200).send("Sorry No Carrier Available Now")
            }

            else{
            
            
        let { name,email, locationPickUp,locationDropOff, studentID } = checkItCanDeliver[0] 

           try{
            
            let newOrder = await new RegOrder({
            id :studentID,
            name: name,
            email: email,
            locationPickUp: locationPickUp,
            locationDropOff: locationDropOff,
            price: 2,
            eta: 8,
                }).save()
           
            
             res.status(200)

        }catch(err){
            console.log(err)
        }


    }}catch(err){
        
        res.status(400).send("There was an error. ", err)
    }

}




module.exports= Registration_User