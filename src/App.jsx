import Navbar from "/src/component/Navbar.jsx";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
