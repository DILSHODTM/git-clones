import React, { useState, useEffect } from "react";
import { instance } from "../../assets/Api/instance";
import { shortenProductDescription } from "../Helpers";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import "./style.scss";

const index = () => {
  const dataInstore = useSelector((data) => data.cart);
  const wishlistProducts = useSelector((data) => data.like);
  const [buyProduct, setBuyProducts] = useState([]);
  const buyProducts = buyProduct.splice(0, 5);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    instance.get(`products?offset=0&limit=8`).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  const handleAddToCart = (product) => {
    dispatch({
      product,
      type: "ADD_TO_CART",
    });
  };
  const handleRemoveFromCart = (id) => {
    dispatch({
      id,
      type: "REMOVE_FROM_CART",
    });
  };
  const handlAddToWishlist = (product) => {
    dispatch({
      product,
      type: "ADD_TO_WISHLIST",
    });
  };
  const handleRemoveToWishlist = (id) => {
    dispatch({
      id,
      type: "REMOVE_FROM_WISHLIST",
    });
  };

  useEffect(() => {
    instance.get(`/categories`).then((res) => {
      setBuyProducts(res.data);
    });
  }, []);

  return (
    <>
      <div className="container row ms-5">
        {buyProducts.map((item) => {
          return (
            <>
              <div className="d-flex gap-5" key={item.id}>
                <h3 className="text-danger">{item?.name}</h3>
                <Link
                  to={`/category/${item?.id}`}
                  className="text-primary fs-3 nav-link"
                >
                  See all <GrLinkNext />
                </Link>
              </div>

              {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((item) => {
            return (
              <div className="cars   " key={item.id}>
                {item.images.length > 0 && item.images[0].startsWith("https://") ?
            <img className="mrs" src={item.images[0]} alt="" />
            :
            <img className="mrs" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
          }
                <h3>{item.category.name}</h3>
                <p>{shortenProductDescription("word", 3, item.description)}</p>
                <p className="fw-bold text-primary">${item.price}</p>
                <div className="d-flex justify-content-between t-5">
                  
                  <button className="btn btn-danger">
                    <Link to={`/product/${item?.id}`} className="nav-link">
                      <BsCart2 /> Details
                    </Link>
                  </button>
                  
                </div>
              </div>
            );
          })
        )}

              <hr />
            </>
          );
        })}
      </div>
    </>
  );
};

export default index;
