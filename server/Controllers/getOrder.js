const RegOrder = require('../Models/RegOrder')

const GetOrder = async (req, res) =>{
     
 try{
   let {id} = req.params.id

    let order = await RegOrder.findById(id)

    res.status(200).send(order)

 }catch(err){
     res.status(400).send(err)
 }

}

module.exports = GetOrder