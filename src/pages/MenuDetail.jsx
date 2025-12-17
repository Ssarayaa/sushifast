import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import menusData from '../data/boxes.json';

function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const menu = menusData.find(m => m.id === parseInt(id));

  // Si le menu n'existe pas
  if (!menu) {
    return (
      <Container className="py-5 text-center fade-in">
        <div className="error-box">
            <h1 className="display-1">🥡</h1>
            <h2 className="text-danger fw-bold">Oups ! Menu introuvable</h2>
            <p className="text-muted">Il semble que ce menu ait été dévoré...</p>
            <Button onClick={() => navigate('/menus')} className="btn-cta mt-3">
            Retour à la carte
            </Button>
        </div>
      </Container>
    );
  }

  return (
    <div className="menu-detail-page py-5">
      <Container>
        {/* Navigation Rapide */}
        <Button 
            onClick={() => navigate(-1)} 
            className="btn-glass mb-4"
        >
            <span className="icon-move">⬅</span> Retour
        </Button>

        <Row className="g-5 align-items-start">
          
          {/* COLONNE GAUCHE : L'IMAGE GLORIEUSE */}
          <Col lg={6} className="position-relative">
            <div className="sticky-lg-top" style={{ top: '100px', zIndex: 1 }}>
                <div className="hero-image-wrapper shadow-glow">
                    <img 
                        src={`/images/${menu.image}`} 
                        alt={menu.nom}
                        className="hero-image"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800';
                        }}
                    />
                    <div className="image-badge">🔥 Best Seller</div>
                </div>
            </div>
          </Col>

          {/* COLONNE DROITE : LES DÉTAILS */}
          <Col lg={6}>
            <div className="detail-content fade-in-up">
                
                {/* En-tête du produit */}
                <h1 className="detail-title">{menu.nom}</h1>
                <p className="detail-subtitle">Préparé minute par nos maîtres sushis</p>

                {/* Dashboard Prix & Pièces */}
                <div className="stats-grid mb-4">
                    <div className="stat-card">
                        <div>
                            <span className="stat-value">{menu.pieces}</span>
                            <span className="stat-label">Pièces</span>
                        </div>
                    </div>
                    <div className="stat-card highlight">
                        <div>
                            <span className="stat-value">{menu.prix.toFixed(2)}€</span>
                            <span className="stat-label">Prix</span>
                        </div>
                    </div>
                </div>

                {/* Section Saveurs */}
                <div className="info-section mb-4">
                    <h5 className="section-title">Explosion de saveurs</h5>
                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {menu.saveurs.map((saveur, idx) => (
                            <span key={idx} className="flavor-tag">
                                {saveur}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Section Ingrédients (Liste stylée) */}
                <div className="info-section">
                    <h5 className="section-title">Ce qu'il y a dedans</h5>
                    <div className="ingredients-list mt-3">
                        {menu.aliments.map((aliment, idx) => (
                            <div key={idx} className="ingredient-row">
                                <div className="d-flex align-items-center">
                                    <span className="bullet-point"></span>
                                    <span className="ingredient-name">{aliment.nom}</span>
                                </div>
                                <Badge bg="light" text="dark" className="qty-badge">
                                    x{aliment.quantite}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuDetail;