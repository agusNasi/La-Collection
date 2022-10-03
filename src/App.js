import { Form } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import Products from "./components/Products";
import Product from "./components/Product";




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/producto" element={<Products />} />
        <Route exact path="/producto/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
