import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Contact,
  Products,
  NotFound,
  ProductDetail,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {/* <Route path="/products/:id/:name" element={<ProductDetail />} /> */}

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      <hr />
      <Footer />
    </>
  );
}

export default App;
