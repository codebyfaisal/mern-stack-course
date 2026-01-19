import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";

import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Contact,
  Products,
  Notfound,
  ProductDetail,
} from "./pages";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* <Route path="/products/:id/:name" element={<ProductDetail />} /> */}

        <Route path="/*" element={<Notfound />} />
      </Routes>

      <hr />
      <Footer />
    </>
  );
}

export default App;
