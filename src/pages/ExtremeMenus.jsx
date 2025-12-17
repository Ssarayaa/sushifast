import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menusData from '../data/boxes.json';
// Import du CSS ci-dessus

function ExtremeMenus() {
  // 1. Logique de tri (inchangée)
  const mostExpensive = menusData.reduce(
    (max, menu) => (menu.prix > max.prix ? menu : max), menusData[0]
  );

  const cheapest = menusData.reduce(
    (min, menu) => (menu.prix < min.prix ? menu : min), menusData[0]
  );

  // 2. Calculs pour l'analyse
  const expPpp = mostExpensive.prix / mostExpensive.pieces;
  const chpPpp = cheapest.prix / cheapest.pieces;
  
  const getPercent = (val1, val2) => {
    const max = Math.max(val1, val2);
    return max === 0 ? 0 : (val1 / max) * 100;
  };

  // 3. Composant Carte Interne
  const ComparisonCard = ({ menu, type }) => {
    const isExpensive = type === 'expensive';
    
    return (
      <div className={`extreme-card ${type}`}>
        {/* Flag */}
        <span className="card-flag">
          {isExpensive ? ' Le plus Luxueux' : ' Le plus Eco'}
        </span>

        {/* Image */}
        <div className="extreme-img-wrapper">
          <img 
            src={`/images/${menu.image}`} 
            alt={menu.nom} 
            className="extreme-img"
            onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Sushi'}
          />
        </div>

        {/* Info */}
        <div className="extreme-info">
          <h3 className="extreme-name">{menu.nom}</h3>
          <div className="extreme-price">{menu.prix.toFixed(2)} €</div>
          <div className="text-muted small mt-2">
             {menu.pieces} pièces • {menu.saveurs.length} saveurs
          </div>
        </div>

        {/* Action */}
        <Link to={`/menu/${menu.id}`} className="extreme-btn">
          Voir le menu
        </Link>
      </div>
    );
  };

  return (
    <div className="extreme-page">
      <Container className="extreme-container">
        
        {/* HERO HEADER */}
        <div className="text-center fade-in-up">
          <h1 className="extreme-title">
            Comparatif <span style={{ color: 'var(--primary)' }}>Extrême</span>
          </h1>
          <p className="extreme-subtitle">
            Du petit plaisir malin à l'expérience gastronomique ultime. 
          </p>
        </div>

        {/* ARENA SECTION */}
        <Row className="justify-content-center mb-5 fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Col lg={10}>
            <div className="comparison-wrapper">
              
              {/* Carte Cher */}
              <ComparisonCard menu={mostExpensive} type="expensive" />
              
              
              {/* Carte Pas Cher */}
              <ComparisonCard menu={cheapest} type="cheap" />
              
            </div>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default ExtremeMenus;