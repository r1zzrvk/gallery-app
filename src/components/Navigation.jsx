import React from 'react'
import { Container, Offcanvas, Nav} from 'react-bootstrap'
import User from './User'

const Navigation = ({show, setShow}) => {
  return (
    <Container>
      <Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
      show={show}
      onHide={() => {
        setShow(false)
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className='px-3'>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-4">
          <Nav.Link href="/" className='px-3'>Галерея</Nav.Link>
          <Nav.Link href="/about" className='px-3 mb-3'>Обо мне</Nav.Link>
        </Nav>
        <User/>
      </Offcanvas.Body>
    </Offcanvas> 
    </Container>
  )
}

export default Navigation;