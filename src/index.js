import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Blog from "./Blog";
import Product from "./Product";
// import Handmade from "./Handmade ";
import Contact from "./Contact";
import NoPage from "./NoPage";
import Miniatures from "./Miniatures";
import Get from "./Get";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="blog" element={<Blog />} />
          {/* <Route path="handmade" element={<Handmade />} />
          <Route path="miniatures" element={<Miniatures/>}/> */}
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<Product />} />
          <Route path="miniatures" element={<Miniatures />} />
          <Route path="get" element={<Get />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
