import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import menusData from '../data/boxes.json';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // --- LOGIQUE DE RECHERCHE ---
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMenus([]);
      setShowResults(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = menusData.filter(menu => {
      // Recherche dans le nom
      const nameMatch = menu.nom.toLowerCase().includes(query);
      
      // Recherche dans les aliments
      const ingredientMatch = menu.aliments.some(aliment => 
        aliment.nom.toLowerCase().includes(query)
      );
      
      // Recherche dans les saveurs
      const flavorMatch = menu.saveurs.some(saveur => 
        saveur.toLowerCase().includes(query)
      );

      return nameMatch || ingredientMatch || flavorMatch;
    });

    setFilteredMenus(results);
    setShowResults(true);
  }, [searchQuery]);

  // --- CONFIGURATION DES CATÉGORIES (IMAGES WALLPAPER) ---
  const features = [
    { 
      title: "Tous les menus", 
      link: "/menus", 
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
      desc: "La liste de tous les menus SushiFast !" 
    },
    { 
      title: "Nos Saveurs", 
      link: "/saveurs", 
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80",
      desc: "Sucré, salé ou épicé ?" 
    },
    { 
      title: "Avocat & Coriandre", 
      link: "/avocat-coriandre", 
      image: "https://recipeimages.migros.ch/crop/v-w-1200-h-630-a-center_center/efe7f2a7aeb5850745ed2d2339a4b85e51ce2587/salade-d-avocat-a-la-coriandre-0-16-9.jpg",
      desc: "Tous les menus avec de l'avocat et/ou de la coriande" 
    },
    { 
      title: "Sans California", 
      link: "/sans-california", 
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&q=80",
      desc: "Tous les menus sans California Saumon " 
    },
    { 
      title: "Petite faim ?", 
      link: "/petite-commande", 
      image: "https://www.kikkoman.fr/fileadmin/user_upload/kikkoman.eu/Food-News/EU_make-your-own-sushi/sushi-kakkoii.jpeg",
      desc: "Des menus légers (-13 pièces)." 
    },
    { 
      title: "Les Extrêmes", 
      link: "/extremes", 
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      desc: "Le moins cher pour économiser ou le plus cher pour se faire plaisir !" 
    }
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredMenus.length > 0) {
      navigate(`/menu/${filteredMenus[0].id}`);
    }
  };

  return (
    <Container className="py-5">
      
      {/* --- HERO SECTION --- */}
      <div className="hero-section text-center mb-5">
        <h1 className="hero-title mb-3">
          Bienvenue chez <span style={{color: 'var(--primary)'}}>SushiFast</span>
        </h1>
        <p className="hero-subtitle mb-4">
          Les sushis les plus rapides de l'Ouest !
        </p>
        
        {/* --- BARRE DE RECHERCHE DESIGN --- */}
        <div className="search-container mb-4">
          <Form onSubmit={handleSearchSubmit}>
            <InputGroup className="search-bar-wrapper">
              {/* Icône intégrée via CSS .search-icon-inside */}
              <span className="search-icon-inside">🔍</span>
              
              <Form.Control
                type="text"
                placeholder="  Je cherche des makis, de l'avocat, du sucré..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </InputGroup>
          </Form>

          {/* --- RÉSULTATS DE RECHERCHE --- */}
          {showResults && (
            <div className="search-results">
              {filteredMenus.length > 0 ? (
                <>
                  <p className="search-results-count">
                     On a trouvé {filteredMenus.length} menu{filteredMenus.length > 1 ? 's' : '' } qui pourrait satisfaire votre appétit !
                  </p>
                  <Row className="g-3 mt-2">
                    {filteredMenus.slice(0, 4).map(menu => (
                      <Col key={menu.id} xs={12} sm={6}>
                        <Card 
                          className="search-result-card"
                          onClick={() => navigate(`/menu/${menu.id}`)}
                        >
                          <div className="d-flex align-items-center p-2">
                             <img 
                                src={`/images/${menu.image}`} 
                                alt={menu.nom} 
                                className="rounded" 
                                style={{width: 60, height: 60, objectFit: 'cover'}} 
                                onError={(e) => e.target.src='https://via.placeholder.com/60'} 
                             />
                             <div className="ms-3 text-start">
                                <h6 className="mb-0 fw-bold">{menu.nom}</h6>
                                <small className="text-muted">{menu.pieces} pièces • <span className="text-danger fw-bold">{menu.prix}€</span></small>
                             </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  {filteredMenus.length > 4 && (
                     <Button variant="link" onClick={() => navigate('/menus')} className="mt-2 text-danger">
                        Voir tout le reste...
                     </Button>
                  )}
                </>
              ) : (
                <div className="no-results">
                  <p className="mb-0">Mince, on n'a rien trouvé...</p>
                  <small className="text-muted">Essaie "Saumon" ou "Avocat" !</small>
                </div>
              )}
            </div>
          )}
        </div>

        <p className="hero-description">
          On attend plus que vous !
        </p>
      </div>

      {/* --- CARTES CATÉGORIES (WALLPAPERS) --- */}
      <Row className="g-4">
        {features.map((feature, idx) => (
          <Col key={idx} xs={12} sm={6} lg={4}>
            <Link to={feature.link} className="text-decoration-none">
              <Card className="category-card h-100">
                <div className="category-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={feature.image}
                    alt={feature.title}
                    className="category-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400?text=' + feature.title;
                    }}
                  />
                  {/* Overlay sombre pour la lisibilité */}
                  <div className="category-overlay">
                    <h3 className="category-overlay-title">{feature.title}</h3>
                  </div>
                </div>
                <Card.Body className="text-center d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="category-title">{feature.title}</Card.Title>
                    <Card.Text className="category-description">{feature.desc}</Card.Text>
                  </div>
                  {/* Utilisation de la classe CSS .btn-cta */}
                  <Button className="btn-cta w-100 justify-content-center mt-3">
                    Voir nos menus 
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default Home;