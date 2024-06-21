import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../carousel'
import NavBar from '../NavBar'

//function component for NavBar --> it will be displayed on all pages
const Home  = () => {

    return (<div>


            <NavBar/>
            
            <h1>U Delivery</h1>
               <Card/>

    </div>)
   



}

export default Home; 