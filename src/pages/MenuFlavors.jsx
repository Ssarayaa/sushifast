import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import menusData from '../data/boxes.json';

function MenuFlavors() {
  const flavorColors = {
    'saumon': 'danger',
    'avocat': 'success',
    'cheese': 'warning',
    'thon': 'primary',
    'coriandre': 'info',
    'viande': 'secondary',
    'spicy': 'danger',
    'crevette': 'danger'
  };

  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Saveurs de nos menus</h1>
      
      <Row className="g-4">
        {menusData.map((menu) => (
          <Col key={menu.id} md={6} lg={4}>
            <Card className="shadow-sm h-100">
              <Card.Img 
                variant="top" 
                src={`/images/${menu.image}`}
                style={{ height: '180px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x180?text=Sushi';
                }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{menu.nom}</Card.Title>
                <div className="mb-2">
                  <small className="text-muted">Saveurs :</small>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {menu.saveurs.map((saveur, idx) => (
                    <Badge 
                      key={idx} 
                      bg={flavorColors[saveur.toLowerCase()] || 'secondary'}
                    >
                      {saveur}
                    </Badge>
                  ))}
                </div>
                <div className="d-flex justify-content-between">
                  <small className="text-muted">{menu.pieces} pièces</small>
                  <strong className="text-danger">{menu.prix.toFixed(2)} €</strong>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuFlavors;