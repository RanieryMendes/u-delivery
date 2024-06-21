import React, { Fragment, useState } from 'react';
import {TextField, Button, Switch, Container, FormControlLabel, InputLabel, NativeSelect} from '@material-ui/core'
import {Redirect} from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles' 
import NavBar from '../NavBar'

//function component for client --> set up details and go ahead with delivery order

const Client = () =>{

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        nativeSelect: {
          marginTop: theme.spacing(2),
        },

        submit: {
            marginTop: theme.spacing(3),
          },
          submit2: {
            marginTop: theme.spacing(3),
            backgroundColor: "gold"
          },

      }));

    const classes = useStyles();
 
    const [dataForm, setDataForm]=useState({
        name: "",
        studentID:"",
        email:"",
        locationFrom:"",
        locationTo:"",
        minutesToReady: 0

    })

     function handleChange(event){
     
        const name = event.target.name
        const value = event.target.value    

        console.log("This is Name: " +  name + " value: " + value)
        setDataForm({...dataForm, [name]:value })

      
    }
    
    async function handleSubmit(event){
     
        event.preventDefault()

        console.log(dataForm)

      
         await fetch("/api/register/Client", {
            method:"POST",
           headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(dataForm)
        }).then(response=>{
           
            let randomNum = (Math.random()*20 )+ 1
            if(response.status == 200){
                <Redirect to = {`/success/${randomNum}`} /> 
                
            }
           console.log(response)
        })
     

        alert ("Data registered")

  
    }

    return(
    
    <div>
  
  
    <NavBar/>
    <h3> Welcome! You're very close to finish your delivery order</h3>


    <Fragment>

            <form onSubmit={handleSubmit}> 
                <Container maxWidth="xs">

                    <TextField  id="name" name="name" label="Name" onChange={handleChange}
                    autoFocus={true} variant="outlined" fullWidth={true} margin="dense" value={dataForm.name}  />


                    <TextField  id="cpf" name="studentID" label="Student ID" onChange={handleChange}
                    autoFocus={true} variant="outlined" fullWidth={true}  margin="dense" value={dataForm.studentID} />


                    <TextField  id="email" name="email" label="Email" onChange={handleChange}
                   autoFocus={true} variant="outlined" fullWidth={true}  margin="dense" value={dataForm.email} />

                    <InputLabel  id="locationFrom" name="locationFrom" htmlFor="select"  fullWidth={true} className={classes.submit} >Food Pick up</InputLabel>
                            <NativeSelect id="select" name="locationFrom" variant="outlined" className={classes.nativeSelect} onChange={handleChange} >
                                <option> </option>
                                <option value="Forest Greens">Forest Greens</option>
                                <option value="Bento Sushi">Bento Sushi</option>
                                <option value="Chick Fil'a">Chick Fil'a</option>
                                <option value="Moe's">Moe's</option>
                                <option value="Village Juice">Village Juice</option>
                                <option value="Camino's Bakery">Camino's Bakery</option>
                                <option value="Starbucks">Starbucks</option>
                                <option value="Subway">Subway </option>
                                <option value="Zick's">Zick's </option>
                                <option value="Legal Grounds Café">Legal Grounds Café</option>
                                <option value="Einstein Bros Bagels">Einstein Bros Bagels</option>
                                <option value="Shorty's">Shorty's</option>
                                <option value="May way">May way </option>
                                <option value="Village Tavern">Village Tavern</option>
                                <option value="Zick's">Zick's</option>
                            </NativeSelect>

                        <InputLabel  id="locationTo" name="locationTo" htmlFor="select_2"  fullWidth={true} className={classes.submit}>Delivery Spot</InputLabel>
                            <NativeSelect id="select_2" name="locationTo"  variant="outlined" className={classes.nativeSelect} onChange={handleChange}>
                                <option> </option>
                                <option value="ZSR Library">ZSR Library</option>
                                <option value="Bento Sushi">Benson Center</option>
                                <option value="Farewell Hall">Farrell Hall</option>
                                <option value="Reyonolda Hall">Reynolda Hall</option>
                                <option value="Johnson">Johnson Residence Hall</option>
                                <option value="Bostwick">Bostwick Residence Hall</option>
                                <option value="Angelou">Angelou Residence Hall</option>
                                <option value="Babcock">Babcock Residence Hall</option>
                                <option value="Collins">Collins Residence Hall</option>
                                <option value="Polo">Polo Residence Hall</option>                                
                                <option value="Magnolia">Magnolia Residence Hall</option>
                                <option value="Dogwood">Dogwood Residence Hall</option>
                                <option value="Martin">Martin Residence Hall</option>
                                <option value="Luther ">Luther Residence Hall</option>
                                <option value="Poteat">Poteat Residence Hall</option>
                                <option value="Huffman">Huffman Residence Hall</option>
                                <option value="Eifferd">Efird Residence Hall</option>
                                <option value="Kitchen">Kitchin Residence Hall</option>
                                <option value="Davis">Davis Residence Hall</option>
                                <option value="Taylor">Taylor Residence Hall</option>
                                <option value="South">South Residence Hall</option>
                                <option value="South">Deacon Place Apartments</option>
                                <option value="Babcock">North Campus Apartments</option>
                                <option value="Babcock">Student Apartments A</option>
                                <option value="Babcock">Student Apartments B</option>
                                
            
                           </NativeSelect>

                           <TextField  id="minutesToReady" name="minutesToReady" label="ETA order will be ready" onChange={handleChange}
                   autoFocus={true} variant="outlined" fullWidth={true}  margin="dense" value={dataForm.minutesToReady} className={classes.submit}/>


                    <Button  type="submit" variant="contained" fullWidth={true} className={classes.submit2}> SUBMIT </Button>

                    
                </Container>

            </form>
            
        </Fragment>


    </div>
    )

}

export default Client
