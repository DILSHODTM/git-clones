import React from 'react';
import{Route,Routes,} from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Likes from './pages/Likes';
import Buy from './UI/buy';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/create';
import Success from './pages/Auth/success';
import Searches from './pages/search/Forsearch.jsx';

const App = () => {
  return (
    <>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="/category/:id" element={<Category/>} />
        <Route path="/likes" element={<Likes/>} />
        <Route path="/product/:id" element={<Buy/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/search/:title" element={<Searches/>} />

      </Routes>
      <Footer/>

      
    </>
  );
};

export default App;
