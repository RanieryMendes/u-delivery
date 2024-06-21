import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import NavBar from '../NavBar'

//this page if not redirected by the own can be accessed by http://localhost/success/245465
//random number

const SuccessPage = () =>{

    let { order } = useParams()

    let responseOrder 

    useEffect(async()=>{
        await fetch(`/api/orders/${order}`, {
            method:"GET",
           headers:{
                "Content-Type":"application/json"
            },
            // body: JSON.stringify(dataForm)
        }).then(response=>{
           
           console.log(response)
        })

    }, [])

return(
    <div>
    <NavBar/>

     <h3>Great news!!! We gotta a match!! We just found a student that can get your food</h3>
     <ul>
         <li>Order ID: {order} </li>
         <li>Carrier Name: </li>
         <li>Carrier Email:</li>
         <li>Cost:2.00 </li>
         
     </ul>

    <br></br>
     <h3>Thanks for choosing U Delivery. A service by students to students!</h3>
    </div>
)


}

export default SuccessPage