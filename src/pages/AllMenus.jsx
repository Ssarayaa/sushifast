import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';

function AllMenus() {
  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Tous nos menus</h1>
      
      <Row className="g-4">
        {menusData.map((menu) => (
          <Col key={menu.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="menu-card shadow-sm">
              <Card.Img 
                variant="top" 
                src={`/images/${menu.image}`}
                alt={menu.nom}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Sushi';
                }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{menu.nom}</Card.Title>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge bg="secondary">{menu.pieces} pièces</Badge>
                  <span className="price-badge">{menu.prix.toFixed(2)} €</span>
                </div>
                <Link 
                  to={`/menu/${menu.id}`} 
                  className="btn btn-outline-danger w-100"
                >
                  Voir détails
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllMenus;