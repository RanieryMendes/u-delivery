
const RegCarrier = require('../Models/RegCarrier')

const Registration_Carrier = async(req, res) =>{

    console.log("Let people now I am registering carrier")

    try{

        let newCarrier = await new RegCarrier({

            name: req.body.name,
            studentID: parseInt(req.body.studentID),
            email: req.body.email,
            locationPickUp: req.body.locationFrom,
            locationDropOff:req.body.locationTo,

        }).save()

      



        res.status(200).send(newCarrier)

    }catch(err){
        
        res.status(400).send("There was an error. ", err)
    }







}

module.exports= Registration_Carrier