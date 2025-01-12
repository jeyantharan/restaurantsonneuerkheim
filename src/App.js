import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppBar from "./component/AppBar";
import Footer from "./component/Footer";

import Home from './pages/Home';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AppBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/terms" element={<Imprint />} />
            <Route path="/privacy-policy" element={<Privacy/>} />
                        <Route path="/cookie" element={<Cookie/>} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
