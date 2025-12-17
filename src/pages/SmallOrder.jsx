import { Container, Row, Col, Card, Table, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';

function SmallOrder() {
  const smallMenus = menusData.filter(menu => menu.pieces < 13);
  const totalPrice = smallMenus.reduce((sum, menu) => sum + menu.prix, 0);

  return (
    <Container className="py-5">
      <h1 className="page-title text-center">Commande de menus &lt; 13 pièces</h1>
      
      <Alert variant="success" className="text-center">
        <h4>Prix total de la commande</h4>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }} className="text-danger">
          {totalPrice.toFixed(2)} €
        </div>
        <small>Pour {smallMenus.length} menus (moins de 13 pièces chacun)</small>
      </Alert>

      <Card className="shadow mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">📊 Détail de la commande</h5>
        </Card.Header>
        <Table striped bordered hover responsive className="mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Menu</th>
              <th className="text-center">Pièces</th>
              <th className="text-end">Prix</th>
            </tr>
          </thead>
          <tbody>
            {smallMenus.map((menu, idx) => (
              <tr key={menu.id}>
                <td>{idx + 1}</td>
                <td>
                  <Link to={`/menu/${menu.id}`} className="text-decoration-none fw-bold">
                    {menu.nom}
                  </Link>
                </td>
                <td className="text-center">
                  <span className="badge bg-secondary">{menu.pieces}</span>
                </td>
                <td className="text-end fw-bold">{menu.prix.toFixed(2)} €</td>
              </tr>
            ))}
            <tr className="table-success">
              <td colSpan="3" className="text-end fw-bold">TOTAL</td>
              <td className="text-end fw-bold text-danger" style={{ fontSize: '1.2rem' }}>
                {totalPrice.toFixed(2)} €
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>

      <Row>
        {smallMenus.map((menu) => (
          <Col key={menu.id} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img 
                src={`/images/${menu.image}`}
                style={{ height: '180px', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x180?text=Sushi';
                }}
              />
              <Card.Body>
                <Card.Title className="fw-bold">{menu.nom}</Card.Title>
                <div className="d-flex justify-content-between">
                  <span className="badge bg-secondary">{menu.pieces} pièces</span>
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

export default SmallOrder;