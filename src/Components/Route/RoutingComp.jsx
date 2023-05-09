import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import ProductsComp from "../Products/ProductsComp";
import MenCategory from "../Products/MenCategory";
import WomenCategory from "../Products/WomenCategory";
import JeweleryCategory from "../Products/JeweleryCategory";
import ElectronicCategory from "../Products/ElectronicCategory";
import AddCart from "../Products/AddCart";
import ProdDetails from "../Products/ProdDetails";
import Counter from "../Products/Counter";

const RoutingComp = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsComp/>}/>
          <Route path="/men" element={<MenCategory/>}/>
          <Route path="/women" element={<WomenCategory/>}/>
          <Route path="/jewel" element={<JeweleryCategory/>}/>
          <Route path="/electronic" element={<ElectronicCategory/>}/>
          <Route path="/cart" element={<AddCart/>}/>
          <Route path="/details" element={<ProdDetails/>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingComp;
