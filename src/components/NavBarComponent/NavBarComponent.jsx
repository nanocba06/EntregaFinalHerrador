import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tecno Córdoba</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Telefonos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tablets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Accesorios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent></CartWidgetComponent>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;