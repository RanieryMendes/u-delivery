import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import logo from '../../assets/final_logo.svg'


const NavBar = () =>{


    return(
    
    <div>
    

<Navbar bg="warning" variant="dark" >
    
<Dropdown>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Menu
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/">Home</Dropdown.Item>
    <Dropdown.Item href="/client">Issue a new order</Dropdown.Item>
    <Dropdown.Item href="/carrier"> Make someone happier</Dropdown.Item>
    <Dropdown.Item disabled="true" href="">Stop Delivery</Dropdown.Item>
    <Dropdown.Item disabled="true" href="">End Order</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    <Navbar.Brand >
      <img
        alt="logo udelivery"
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
      U Delivery
    </Navbar.Brand>


  </Navbar>
        


        </div>)

}

export default NavBar
