import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup, Badge, Button } from 'react-bootstrap';
import menusData from '../data/boxes.json';

function MenuDetail() {
  const { id } = useParams();
  const menu = menusData.find(m => m.id === parseInt(id));

  if (!menu) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-danger">Menu non trouvé</h2>
        <Link to="/menus" className="btn btn-primary mt-3">
          Retour aux menus
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Link to="/menus" className="btn btn-outline-secondary mb-4">
        ← Retour
      </Link>

      <Row>
        <Col md={5} className="mb-4">
          <Card className="shadow">
            <Card.Img 
              src={`/images/${menu.image}`}
              style={{ height: '350px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x350?text=Sushi';
              }}
            />
            <Card.Body className="text-center">
              <h2 className="text-danger fw-bold">{menu.nom}</h2>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <Badge bg="secondary" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                  {menu.pieces} pièces
                </Badge>
                <Badge bg="danger" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
                  {menu.prix.toFixed(2)} €
                </Badge>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="shadow mb-4">
            <Card.Header className="bg-danger text-white">
              <h4 className="mb-0">🍱 Liste des aliments</h4>
            </Card.Header>
            <ListGroup variant="flush">
              {menu.aliments.map((aliment, idx) => (
                <ListGroup.Item 
                  key={idx}
                  className="d-flex justify-content-between align-items-center"
                >
                  <span className="fw-bold">{aliment.nom}</span>
                  <Badge bg="primary" pill>
                    Quantité: {aliment.quantite}
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card.Footer className="text-muted">
              Total: {menu.aliments.length} types d'aliments
            </Card.Footer>
          </Card>

          <Card className="shadow">
            <Card.Header className="bg-success text-white">
              <h4 className="mb-0">🌶️ Saveurs</h4>
            </Card.Header>
            <Card.Body>
              <div className="d-flex flex-wrap gap-2">
                {menu.saveurs.map((saveur, idx) => (
                  <Badge 
                    key={idx} 
                    bg="success" 
                    style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                  >
                    {saveur}
                  </Badge>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MenuDetail;
