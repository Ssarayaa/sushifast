import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllMenus from './pages/AllMenus';
import MenuFlavors from './pages/MenuFlavors';
import AvocatCoriandre from './pages/AvocatCoriandre';
import MenuDetail from './pages/MenuDetail';
import WithoutCalifornia from './pages/WithoutCalifornia';
import SmallOrder from './pages/SmallOrder';
import ExtremeMenus from './pages/ExtremeMenus';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menus" element={<AllMenus />} />
            <Route path="/saveurs" element={<MenuFlavors />} />
            <Route path="/avocat-coriandre" element={<AvocatCoriandre />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/sans-california" element={<WithoutCalifornia />} />
            <Route path="/petite-commande" element={<SmallOrder />} />
            <Route path="/extremes" element={<ExtremeMenus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;