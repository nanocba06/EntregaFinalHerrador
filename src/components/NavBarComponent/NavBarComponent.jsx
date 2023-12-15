import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent"
import { Link } from 'react-router-dom';


export const NavBarComponent = () => {

  //console.log(categories);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to={"/"} className='titulo' style={{textDecoration: "none", color:"red", fontSize:"25px"}}>Córdoba Game</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link to={`/category/action`} style={{textDecoration: "none",textTransform: "capitalize",color:"white"}}>Action</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/sports`} style={{textDecoration: "none",textTransform: "capitalize", color:"white"}}>Sports</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to={`/category/strategy`} style={{textDecoration: "none",textTransform: "capitalize", color:"white"}}>Strategy</Link>
                  </NavDropdown.Item>           
            </NavDropdown>
          </Nav>
          <CartWidgetComponent></CartWidgetComponent>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}