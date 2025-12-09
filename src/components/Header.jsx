import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span style={{ fontSize: '1.5rem' }}>SushiFast</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/menus">Tous les menus</Nav.Link>
            <NavDropdown title="Recherches" id="search-dropdown">
              <NavDropdown.Item as={Link} to="/saveurs">
                Saveurs des menus
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/avocat-coriandre">
                Avocat/Coriandre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sans-california">
                Sans California Saumon
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/petite-commande">
                Commande &lt; 13 pièces
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/extremes">
                Menus extrêmes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;