import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <h1>SuperMazon</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:batmanid" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
