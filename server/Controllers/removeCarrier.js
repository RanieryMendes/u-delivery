const RegCarrier = require('../Models/RegCarrier')

const removeCarrier = async (req, res) =>{

    console.log(req.params)
    let t =parseInt(req.params)
    console.log(t)
 
    try{

    let delWorker =  await RegCarrier.findOneAndRemove({studentID: parseInt(req.params)}) //student cannot be assigned to another order

    }catch(err){
        console.log(err)
    }
}

module.exports = removeCarrier