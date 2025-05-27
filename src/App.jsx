import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import NewFile from "./components/NewFile";
import './index.css';
// import ScrollWatcher from "./components/ScrollWatcher";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";

// AOS.init();
function App() {
  return (
    <>
   
     <div className="min-h-screen">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hero" element={<Hero/>} />
        </Routes>
      </Router>
      <Footer />
     </div>
    </>
  );
  F;
}

export default App;
