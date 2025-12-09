import { Container, Row, Col, Card, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';

function WithoutCalifornia() {
  const filteredMenus = menusData.filter(menu => 
    !menu.aliments.some(aliment => 
      aliment.nom.toLowerCase() === 'california saumon avocat'
    )
  );

  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Menus sans California Saumon Avocat</h1>
      
      <Alert variant="warning" className="text-center">
        <strong>{filteredMenus.length}</strong> menus disponibles sans California Saumon Avocat
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
                  <small className="text-muted">Aliments principaux :</small>
                </div>
                <ul className="small mb-3" style={{ maxHeight: '100px', overflowY: 'auto' }}>
                  {menu.aliments.slice(0, 3).map((aliment, idx) => (
                    <li key={idx}>{aliment.nom}</li>
                  ))}
                  {menu.aliments.length > 3 && (
                    <li className="text-muted">... et {menu.aliments.length - 3} autre(s)</li>
                  )}
                </ul>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="secondary">{menu.pieces} pièces</Badge>
                  <strong className="text-danger">{menu.prix.toFixed(2)} €</strong>
                </div>
                <Link 
                  to={`/menu/${menu.id}`} 
                  className="btn btn-warning w-100 mt-3"
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

export default WithoutCalifornia;