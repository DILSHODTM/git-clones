import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { instance } from "../../assets/Api/instance";
import Logos from "../../assets/images/Ebay-Logo.png";
import Search from "../../pages/search/search";
import { useSelector } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import "./style.scss";
const index = () => {
  const dataInstore = useSelector((data) => data.cart);
  const wishlistProducts = useSelector((data) => data.like);
  const carts = dataInstore.cartProducts;

  const likedProducts = wishlistProducts.likedProducts;
  const [usernameS, setUsernameS] = useState([]);


  if (localStorage.getItem("token")) {
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((username) => {
        setUsernameS(username.email);
      });
  }

  const [categorie, setCategories] = useState([]);
  const categories=categorie.splice(0, 5);

  useEffect(() => {
    instance.get("/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const pages = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <header className="position-sticky top-0 zen bcgs">
        <div className="container w-75 d-flex justify-content-between ">
          <div className=" d-flex gap-2">
            <h2 className="fs-4 pt-2">Hi</h2>
            {localStorage.getItem("token") ? (
              <h2 className="fs-5 p-2">{usernameS}</h2>
            ) : (
              <button className="btn btn-primary btns">
                <Link to="/Login" className=" text-light nav-link">
                  Sign in
                </Link>
              </button>
            )}
            {localStorage.getItem("token") ? (
              <button className="btn btn-primary btns" onClick={pages}>
                <Link to="/" className=" text-light nav-link">
                  Sign out
                </Link>
              </button>
            ) : (
              <button className="btn btn-primary btns">
                <Link to="/register" className=" text-light nav-link">
                  Register
                </Link>
              </button>
            )}
            <div className="">
              <ul className="d-flex gap-5 mt-2 forlinks">
                <li className="nav-item">
                  <Link className="nav-link">Daily Deals</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link">Help & Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className="d-flex gap-4 forlinks mt-2">
              <li className="nav-item">
                <Link className="nav-link">Ship to</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link">Sell</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Watchlist</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link">My eBay</Link>
              </li>
              <li className="nav-item fss d-flex">
                <Link to="/Likes">
                  <FiHeart />
                </Link>
                <p className="bg-danger border rounded-circle fs-6 px-1">
                  {likedProducts.length}
                </p>
              </li>
              <li className="nav-item fss d-flex">
                <Link to="/cart">
                  <BsCart2 />
                </Link>
                <p className="bg-danger border rounded-circle fs-6 px-1">
                  {carts.length}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="sss" />

        <div className="container w-75">
          <div className="container d-flex ">
            <Link to="/">
              <img src={Logos} alt="" className="logo" />
            </Link>

            <h3 className="fs-6 cotes">Chop by cotegory</h3>

            <Search />

            
          </div>

          <hr className="p-1" />
        </div>
      </header>
      <div className="container">
        <ul className="d-flex gap-3 forlinks-2 mt-2 fs">
          <li className="nav-item fw-bold">
            <Link className="nav-link">Home</Link>
            <hr className="hre fw-bold" />
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Motors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link">Fashion</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Electronics</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Collectibles & Art</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Home & Garden</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Sporting Goods</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Toys & Hobbies</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Business & Industrial</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link">Music</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default index;
