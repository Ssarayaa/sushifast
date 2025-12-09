import { Container, Row, Col, Card, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';

function ExtremeMenus() {
  const mostExpensive = menusData.reduce((max, menu) => 
    menu.prix > max.prix ? menu : max, menusData[0]
  );
  
  const cheapest = menusData.reduce((min, menu) => 
    menu.prix < min.prix ? menu : min, menusData[0]
  );

  const MenuCard = ({ menu, type }) => (
    <Card className={`shadow h-100 border-${type === 'expensive' ? 'danger' : 'success'} border-3`}>
      <div className={`bg-${type === 'expensive' ? 'danger' : 'success'} text-white text-center py-2`}>
        <h4 className="mb-0">
          {type === 'expensive' ? '👑 Menu le plus cher' : '💎 Menu le moins cher'}
        </h4>
      </div>
      <Card.Img 
        src={`/images/${menu.image}`}
        style={{ height: '300px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/400x300?text=Sushi';
        }}
      />
      <Card.Body>
        <Card.Title className="fw-bold text-center" style={{ fontSize: '1.5rem' }}>
          {menu.nom}
        </Card.Title>
        
        <div className="text-center my-4">
          <div className="mb-3">
            <Badge bg="secondary" style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}>
              {menu.pieces} pièces
            </Badge>
          </div>
          <div className="mb-3">
            <Badge 
              bg={type === 'expensive' ? 'danger' : 'success'} 
              style={{ fontSize: '1.5rem', padding: '0.7rem 1.5rem' }}
            >
              {menu.prix.toFixed(2)} €
            </Badge>
          </div>
        </div>

        <div className="mb-3">
          <small className="text-muted d-block mb-2"><strong>Saveurs :</strong></small>
          <div className="d-flex flex-wrap gap-2">
            {menu.saveurs.map((saveur, idx) => (
              <Badge key={idx} bg="info">{saveur}</Badge>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <small className="text-muted d-block mb-2"><strong>Aliments :</strong></small>
          <ul className="small">
            {menu.aliments.slice(0, 3).map((aliment, idx) => (
              <li key={idx}>{aliment.nom}</li>
            ))}
            {menu.aliments.length > 3 && (
              <li className="text-muted">... et {menu.aliments.length - 3} autre(s)</li>
            )}
          </ul>
        </div>

        <Link 
          to={`/menu/${menu.id}`} 
          className={`btn btn-${type === 'expensive' ? 'danger' : 'success'} w-100`}
        >
          Voir tous les détails
        </Link>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Menus aux prix extrêmes</h1>
      
      <Alert variant="info" className="text-center mb-5">
        <h5>📊 Comparaison</h5>
        <Row>
          <Col md={6}>
            <strong>Menu le moins cher</strong>
            <p className="h4 text-success mb-0">{cheapest.prix.toFixed(2)} €</p>
          </Col>
          <Col md={6}>
            <strong>Menu le plus cher</strong>
            <p className="h4 text-danger mb-0">{mostExpensive.prix.toFixed(2)} €</p>
          </Col>
        </Row>
      </Alert>
      
      <Row className="g-4">
        <Col md={6}>
          <MenuCard menu={mostExpensive} type="expensive" />
        </Col>
        <Col md={6}>
          <MenuCard menu={cheapest} type="cheap" />
        </Col>
      </Row>

      <Card className="shadow mt-5">
        <Card.Header className="bg-secondary text-white">
          <h4 className="mb-0">📈 Analyse comparative</h4>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="border-end">
              <h5 className="text-danger"> {mostExpensive.nom}</h5>
              <ul className="list-unstyled">
                <li><strong>Prix :</strong> {mostExpensive.prix.toFixed(2)} €</li>
                <li><strong>Pièces :</strong> {mostExpensive.pieces}</li>
                <li><strong>Prix/pièce :</strong> {(mostExpensive.prix / mostExpensive.pieces).toFixed(2)} €</li>
                <li><strong>Saveurs :</strong> {mostExpensive.saveurs.length}</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-success"> {cheapest.nom}</h5>
              <ul className="list-unstyled">
                <li><strong>Prix :</strong> {cheapest.prix.toFixed(2)} €</li>
                <li><strong>Pièces :</strong> {cheapest.pieces}</li>
                <li><strong>Prix/pièce :</strong> {(cheapest.prix / cheapest.pieces).toFixed(2)} €</li>
                <li><strong>Saveurs :</strong> {cheapest.saveurs.length}</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExtremeMenus;