import React, { useState, useEffect } from "react";
import { instance } from "../../assets/Api/instance";
import { useParams } from "react-router-dom";
import { shortenProductDescription } from "../../UI/Helpers";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
  const dataInstore = useSelector((data) => data.cart);
  const wishlistProducts = useSelector((data) => data.like);

  const dispatch = useDispatch();
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
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [buyProducts, setBuyProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    instance.get(`/categories/${id}/products`).then((res) => {
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    instance.get(`/categories/${id}`).then((res) => {
      setBuyProducts(res.data);
    });
  }, []);
  return (
    <>
      <div className="text-center mt-5 mb-4"></div>
      <div className=" container mx-auto row ">
        <div className="">
          <h2>{buyProducts.name}</h2>
        </div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((item) => {
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
                  {dataInstore.cartProducts.find(
                    (product) => product.id === item.id
                  ) ? (
                    <button
                      className="btn "
                      onClick={() => {
                        handleRemoveFromCart(item.id);
                      }}
                    >
                      <BsCart2 className="text-danger fs-4" />{" "}
                    </button>
                  ) : (
                    <button
                      className="btn "
                      onClick={() => {
                        handleAddToCart(item);
                      }}>
                      <BsCart2 className=" text-secondary  fs-4" />
                    </button>
                  )}
                  <button className="btn btn-danger">
                    <Link to={`/product/${item?.id}`} className="nav-link">
                      <BsCart2 /> Details
                    </Link>
                  </button>
                  {wishlistProducts.likedProducts.find(
                    (product) => product.id === item.id
                  ) ? (
                    <button
                      className="btn "
                      onClick={() => {
                        handleRemoveToWishlist(item.id);
                      }}
                    >
                      <FaHeart className="text-danger fs-4" />{" "}
                    </button>
                  ) : (
                    <button
                      className="btn " onClick={() => { handlAddToWishlist(item); }} >
                      <FaHeart className="text-secondary fs-4" />{" "}
                    </button>)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default index;
