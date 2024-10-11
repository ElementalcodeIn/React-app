import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header';
import Nevbar from './Pages/Nevbar';
import Footer from './Pages/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Navigations/Home';
import About from './Navigations/About';
import Product from './Navigations/Product';
import Service from './Navigations/Service';
import Contact from './Navigations/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nevbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer />

      </header>
    </div>
  );
}

export default App;
