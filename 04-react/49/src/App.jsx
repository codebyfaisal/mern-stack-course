import React from "react";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router";
import Shorts from "./pages/Shorts";
import ShortDetail from "./pages/ShortDetail";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";

const shorts = ["4rf56rd", "32dx34", "3ds32"];

// .com/shorts/4rf56rd

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path={"/shorts/:id"} element={<ShortDetail />} />
        <Route path="/account" element={<Account />} />
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>

      <footer>
        <p className="copyright">copyright 2025</p>
      </footer>
    </div>
  );
}

export default App;
