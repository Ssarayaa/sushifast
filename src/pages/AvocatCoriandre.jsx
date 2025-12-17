import { Container, Row, Col, Card, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';

function AvocatCoriandre() {
  const filteredMenus = menusData.filter(menu => 
    menu.saveurs.some(saveur => 
      saveur.toLowerCase().includes('avocat') || 
      saveur.toLowerCase().includes('coriandre')
    )
  );

  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Menus Avocat & Coriandre</h1>
      
      <Alert variant="success" className="text-center">
        <strong>{filteredMenus.length}</strong> menus trouvés avec avocat ou coriandre
      </Alert>
      
      <Row className="g-4">
        {filteredMenus.map((menu) => (
          <Col key={menu.id} md={6} lg={4}>
            <Card className="shadow-sm h-100">
              <Card.Img 
                variant="top" 
                src={`/images/${menu.image}`}
                style={{ height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=Sushi';
                }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{menu.nom}</Card.Title>
                <div className="mb-2">
                  <small className="text-muted">Saveurs :</small>
                </div>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  {menu.saveurs.map((saveur, idx) => {
                    const isHighlighted = saveur.toLowerCase().includes('avocat') || 
                                        saveur.toLowerCase().includes('coriandre');
                    return (
                      <Badge 
                        key={idx} 
                        bg={isHighlighted ? 'success' : 'secondary'}
                      >
                        {saveur} {isHighlighted && '✓'}
                      </Badge>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="secondary">{menu.pieces} pièces</Badge>
                  <strong className="text-danger">{menu.prix.toFixed(2)} €</strong>
                </div>
                <Link 
                  to={`/menu/${menu.id}`} 
                  className="btn btn-success w-100 mt-3"
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

export default AvocatCoriandre;