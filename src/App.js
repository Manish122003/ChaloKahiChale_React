import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Landingpage from './components/home/Landingpage/Landingpage';
import Explore from './components/home/Explore/Explore';
import Lakshadweep from './components/home/Lakshadweep/Lakshadweep';
import Testimonial from './components/home/Testimonial/Testimonial';
import Footer from './components/home/Footer/Footer';
import OfferComponent from './components/home/OfferComponent/OfferComponent';
import City from "./pages/city/City";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import SignUp from "./pages/signup/SignUp";
import Hotel from "./pages/hotel/Hotel";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Extra from "./Extra";
import Product from "./pages/products/Product";
import axios from "axios";
import ProductDetail from './pages/products/ProductDetail';
function App() {
 const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://json-server-c67opnddza-el.a.run.app/products');
      console.log("IN APP",response)
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Landingpage />
            <Explore />
            <Lakshadweep />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/popDestination" element={
          <>
            <City />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Profile />
            <Footer />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/hotel" element={
          <>
            <Hotel />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Cart />
            <Testimonial />
            <OfferComponent />
            <Footer />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/products" element={
        <Product productProps={products} />} />
        <Route path="/product/:id" element={
          <ProductDetail productProps={products} />} />
      </Routes>
    </>
  );
}

export default App;
