import React, { useState } from 'react';
import {Navbar, Container} from 'react-bootstrap'
import Navigation from './Navigation';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={()=>{setShow(true)}}/>
    <Navbar.Brand href="#" className='px-5'>Gallery app</Navbar.Brand>
    <Navigation show={show} setShow={setShow}/>
  </Container>
</Navbar>
  )
}

export default Header