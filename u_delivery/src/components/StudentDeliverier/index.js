import React, {useState, Fragment,useEffect} from 'react';
import NavBar from '../NavBar'
import {TextField, Button, Switch, Container, FormControlLabel, InputLabel, NativeSelect, Checkbox, FormLabel, FormGroup} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles' 


//function component for registering new order 

const StudentDeliverier = () =>{

    //styles for form sections
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

    
  //array of objects with the name of delivery spots and food pick up
   
   const destinations = [{"name" : "ZSR Library", "checked": false} , 
   {"name" : "Farrell Hall", "checked": false} ,
   {"name" : "Reynolda Hall", "checked": false} ,
   {"name" : "Benson Center", "checked": false},
   {"name" : "Polo Residence Hall", "checked": false} ,
   {"name" : "Martin Residence Hall", "checked": false} ,
   {"name" : "Student Apartments A", "checked": false} ,
   {"name" : "Student Apartments B", "checked":  false} ,
   {"name" : "North Campus Apartment", "checked": false} ,
   {"name" : "Magnolia Residence Hall", "checked": false} ,
   {"name" : "Dogwood Residence Hall", "checked": false} ,
   {"name" : "Deacon Place Apartments", "checked": false} ,
   {"name" : "Kitchin Residence Hall", "checked": false} ,
   {"name" : "Poteat Residence Hall", "checked": false} ,
   {"name" : "Taylor Residence Hall", "checked": false} ,
   {"name" : "Davis Residence Hall", "checked": false} ,
   {"name" : "Huffman Residence Hall", "checked": false} ,
   {"name" : "Effird Residence Hall", "checked": false} ,
   {"name" : "Collins Residence Hall", "checked": false} ,
   {"name" : "Bostwick Residence Hall", "checked": false} ,
   {"name" : "Johnson Residence Hall", "checked": false} ,
   {"name" : "Babcock Residence Hall", "checked": false} ,
   {"name" : "Luther Residence Hall", "checked": false} ,
   {"name" : "Angelou Residence Hall", "checked": false} ,
   {"name" : "South Residence Hall", "checked": false} ,

]

   const[selectedDeliveries, setSelectedDeliveries] = useState([{"name" : "ZSR Library", "checked": false} , 
   {"name" : "Farrell Hall", "checked": false} ,
   {"name" : "Reynolda Hall", "checked": false} ,
   {"name" : "Benson Center", "checked": false},
   {"name" : "Polo Residence Hall", "checked": false} ,
   {"name" : "Martin Residence Hall", "checked": false} ,
   {"name" : "Student Apartments A", "checked": false} ,
   {"name" : "Student Apartments B", "checked":  false} ,
   {"name" : "North Campus Apartment", "checked": false} ,
   {"name" : "Magnolia Residence Hall", "checked": false} ,
   {"name" : "Dogwood Residence Hall", "checked": false} ,
   {"name" : "Deacon Place Apartments", "checked": false} ,
   {"name" : "Kitchin Residence Hall", "checked": false} ,
   {"name" : "Poteat Residence Hall", "checked": false} ,
   {"name" : "Taylor Residence Hall", "checked": false} ,
   {"name" : "Davis Residence Hall", "checked": false} ,
   {"name" : "Huffman Residence Hall", "checked": false} ,
   {"name" : "Effird Residence Hall", "checked": false} ,
   {"name" : "Collins Residence Hall", "checked": false} ,
   {"name" : "Bostwick Residence Hall", "checked": false} ,
   {"name" : "Johnson Residence Hall", "checked": false} ,
   {"name" : "Babcock Residence Hall", "checked": false} ,
   {"name" : "Luther Residence Hall", "checked": false} ,
   {"name" : "Angelou Residence Hall", "checked": false} ,
   {"name" : "South Residence Hall", "checked": false} ,

])
 
   const [allOptions, setAllOptions] = useState([{"name" : "Bento Sushi", "checked":false},
   {"name" : "Forest Greens", "checked":false},
   {"name" : "Chick Fil'a", "checked":false},
   {"name" : "Zicks", "checked":false},
   {"name" : "Shorty's", "checked":false},
   {"name" : "Moe's", "checked":false},
   {"name" : "Subway", "checked":false},
   {"name" : "Legal Grounds", "checked":false},
   {"name" : "Village Tavern", "checked":false},
   {"name" : "May way", "checked":false},
   {"name" : "Einstein Bros Bagels", "checked":false},
   {"name" : "Starbucks", "checked":false},
   {"name" : "Camino's Bakery", "checked":false}])


    const [stores, setStores] = useState([{"name" : "Bento Sushi", "checked":false},
    {"name" : "Forest Greens", "checked":false},
    {"name" : "Chick Fil'a", "checked":false},
    {"name" : "Zicks", "checked":false},
    {"name" : "Shorty's", "checked":false},
    {"name" : "Moe's", "checked":false},
    {"name" : "Subway", "checked":false},
    {"name" : "Legal Grounds", "checked":false},
    {"name" : "Village Tavern", "checked":false},
    {"name" : "May way", "checked":false},
    {"name" : "Einstein Bros Bagels", "checked":false},
    {"name" : "Starbucks", "checked":false},
    {"name" : "Camino's Bakery", "checked":false}])

    const updateStores = index => event => {

        
        const name = event.target.name
        const value = event.target.value 

        console.log("Index: ", index + " " + name + " " + value)

        const newSelectedStores = [...stores];
        if(newSelectedStores[index].checked == false){
        newSelectedStores[index] = {"name": name ,"checked":value};
        }
        else{ newSelectedStores[index] = {"name": name ,"checked":false};}
        setStores(newSelectedStores);

        getStore()

    }

    //ensure useState  updated the content of stores and delivery points
    useEffect(() => {
      getStore()   // action on update of movies
    }, [stores]);

    useEffect(() => {
       getSpot() // action on update of movies
    }, [selectedDeliveries]);

    const updateDeliveries = index => event => {

        
        const name = event.target.name
        const value = event.target.value 


        const newSelectedDeliveries= [...selectedDeliveries];
        if(newSelectedDeliveries[index].checked == false){
        newSelectedDeliveries[index] = {"name": name ,"checked":value};
        }
        else{ newSelectedDeliveries[index] = {"name": name ,"checked":false};}
        console.log("" + selectedDeliveries)

        setSelectedDeliveries( newSelectedDeliveries);
       
        getSpot()

    }

    const [dataForm, setDataForm]=useState({
        name: "",
        studentID:"",
        email:"",
        locationFrom:[],
        locationTo:[]

    })

     function handleChange(event){
     
        const name = event.target.name
        const value = event.target.value    

        console.log("This is location: " +  name + " value: " + value)
        setDataForm({...dataForm, [name]:value })

    }
    
    const getStore = () =>{
        let name1 = "locationFrom"
        
            setDataForm({...dataForm, [name1] : stores})
        
        
       

    }

    const getSpot = () => {
        let name2 = "locationTo"

    
    setDataForm({...dataForm, [name2]: selectedDeliveries})
  
       

    }




    async function handleSubmit(event){
     
        event.preventDefault()

        getStore()
        getSpot()


     
         await fetch("/api/register/Carrier", {
            method:"POST",
           headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(dataForm)
        }).then(response=>{
           
           console.log(response)
        })
     

        alert ("Data registered")

  
    }


    return ( <div> 
           
            <NavBar/>

    <h3> It is time to make a fellow happy</h3>


    <Fragment>

            <form onSubmit={handleSubmit}> 
                <Container maxWidth="lg">

                    <TextField  id="name" name="name" label="Name" onChange={handleChange}
                    autoFocus={true} variant="outlined" fullWidth={true} margin="dense" value={dataForm.name}  />


                    <TextField  id="cpf" name="studentID" label="Student ID" onChange={handleChange}
                    autoFocus={true} variant="outlined" fullWidth={true}  margin="dense" value={dataForm.studentID} />


                    <TextField  id="email" name="email" label="Email" onChange={handleChange}
                   autoFocus={true} variant="outlined" fullWidth={true}  margin="dense" value={dataForm.email} />


    

      <FormLabel component="legend">Tell us which places you can stop by and get food!</FormLabel>
        <FormGroup row>

        
        {allOptions.map( (store, index) => (
           
            <FormControlLabel control={<Checkbox value={true} name={store.name} onChange={updateStores(index)} />} label={store.name} />
            
        ))
        }

          </FormGroup>

    <FormLabel component="legend">Tell us which places you are willing to go and save the day!</FormLabel>
        <FormGroup row>

        
                    {destinations.map( (stop, index) => (
                    
                    
                        <FormControlLabel control={<Checkbox value={true} name={stop.name} onChange={updateDeliveries(index)} />} label={stop.name} />
                        
                    ))
                    }

        </FormGroup>
                
            


    <Button  type="submit" variant="contained" fullWidth={true} className={classes.submit2}> SUBMIT </Button>

                    
    </Container>

            </form>
            
        </Fragment>



    </div>)

}

export default StudentDeliverier