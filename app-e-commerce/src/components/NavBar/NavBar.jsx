import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';



const NavBar = () => {

    const {cartCount} = useContext(cartContext)
  return (
    <Container>

        <Navbar bg='dark'  data-bs-theme="dark" fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Nav.Link as={Link} to={'/'}>
                        <div>EPICSOUND</div>
                    </Nav.Link>
                </Navbar.Brand>
                <Container>
                <div className='d-flex justify-content-end'>
                    <CartWidget counter= {cartCount}></CartWidget>
                </div>
                </Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="ms-auto">
                    <NavDropdown title="GUITARRAS" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/categoria/guitarrasAcusticas'}>Acusticas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/guitarrasElectricas'}>Electricas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/accesoriosGuitarras'}>Accesorios guitarras</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='BAJOS'>
                        <NavDropdown.Item as={Link} to={'/categoria/bajosAcusticos'}>Acusticos</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/bajosElectricos'}>Electricos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="PERCUSION" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/categoria/bateriasAcusticas'}>Baterias Acusticas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/bateriasElectronicas'}>Baterias electronicas</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/accesoriosBateria'}>Accesorios Baterias</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="TECLADOS" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/categoria/tecladosDigitales'}>Teclados digitales</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/controladoresMidi'}>Controladores MIDI</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/categoria/pianos'}>Pianos</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="MI CUENTA" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={'/'}>Datos personales</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={'/'}>Mis compras</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </Container>
  )
}

export {NavBar}