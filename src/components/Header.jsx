import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation(); // Pour savoir sur quelle page on est

  return (
    <Navbar expand="lg" className="modern-navbar sticky-top" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
            <span className="brand-text">SushiFast</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler-custom">
            <span></span><span></span><span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" className={`nav-link-custom ${location.pathname === '/' ? 'active' : ''}`}>
                Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/menus" className={`nav-link-custom ${location.pathname === '/menus' ? 'active' : ''}`}>
                Tous les menus
            </Nav.Link>
            
            <NavDropdown title="Recherches ∇" id="search-dropdown" className="dropdown-custom">
              <NavDropdown.Item as={Link} to="/saveurs" className="dropdown-item-custom">
                 🌶️ Par Saveurs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/avocat-coriandre" className="dropdown-item-custom">
                 🥑 Avocat/Coriandre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sans-california" className="dropdown-item-custom">
                 🚫 Sans California
              </NavDropdown.Item>
              <NavDropdown.Divider className="dropdown-divider-custom"/>
              <NavDropdown.Item as={Link} to="/petite-commande" className="dropdown-item-custom">
                Petite faim
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/extremes" className="dropdown-item-custom">
                Menus Extrêmes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;