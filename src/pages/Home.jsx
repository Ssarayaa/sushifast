import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { title: "Tous les menus", link: "/menus", icon: "📋", desc: "Découvrez notre carte complète" },
    { title: "Saveurs", link: "/saveurs", icon: "🌶️", desc: "Les saveurs de chaque menu" },
    { title: "Avocat/Coriandre", link: "/avocat-coriandre", icon: "🥑", desc: "Menus spéciaux" },
    { title: "Sans California", link: "/sans-california", icon: "🎯", desc: "Sélection spéciale" },
    { title: "Petite commande", link: "/petite-commande", icon: "💰", desc: "Menus < 13 pièces" },
    { title: "Extrêmes", link: "/extremes", icon: "⭐", desc: "Plus cher/Moins cher" }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold text-danger">SushiFast</h1>
        <p className="lead text-muted">Découvrez nos délicieux menus de sushis</p>
      </div>

      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body className="text-center">
                <div style={{ fontSize: '3rem' }} className="mb-3">{feature.icon}</div>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text className="text-muted">{feature.desc}</Card.Text>
                <Button as={Link} to={feature.link} variant="danger">
                  Découvrir
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;