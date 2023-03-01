import React, { useState, useRef, useEffect } from "react";
import { instance } from "../../assets/Api/instance";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { shortenProductDescription } from "../Helpers";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./style.scss";

const index = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [categoryswipe, setCategoryswipe] = useState([]);

  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => {
      setData(res.data);
      instance
        .get(`/categories/${res.data.category.id}/products`)
        .then((res) => {
          setCategoryswipe(res.data);
        });
    });
  }, []);
  const dataInstore = useSelector((data) => data.cart);
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


  return (
    <>
      <section>
        <div className="container w-75">
          <h3>EXTRA $10 OFF 3+ ITEMS WITH CODE 10OFF2023TECH</h3>
          <div className="row">
            <div className="col-md-6">
              {data.images?.length > 0 &&
              data?.images[0].startsWith("https://") ? (
                <img
                  className="single-product__image"
                  src={data.images[0]}
                  alt=""
                />
              ) : (
                <img
                  className="single-product__image"
                  src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  alt=""
                />
              )}
            </div>
            <div className="col-md-6 gap-5">
              <h3> Name : {data.title}</h3>
              <h4>Category : {data.category?.id}</h4>
              <h4>Date : {data.updatedAt}</h4>
              <h4>Prise : $ {data.price}</h4>
              <p className="fs-5 text-danger">
                {" "}
                instruction : {data.description}
              </p>

              {dataInstore.cartProducts.find((item) => item.id === data.id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(data.id)}
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(data)}
                >
                  <BsCart2 /> Buy
                </button>
              )}
            </div>
          </div>
        </div>

        <hr />
        <h3 className="text-center">Related Products</h3>
        <hr />

        <div className="swipes">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {categoryswipe.map((item) => (
              <SwiperSlide>
                <div className="card w-75 text-center" key={item.id}>
                  {item.images.length > 0 &&
                  item.images[0].startsWith("https://") ? (
                    <img className="withes" src={item.images[0]} alt="" />
                  ) : (
                    <img
                      className="withes"
                      src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                      alt=""
                    />
                  )}

                  <h3>{item.category.name}</h3>

                  <p>
                    {shortenProductDescription("word", 5, item.description)}
                  </p>
                  <div className="d-flex justify-content-between mt-5"></div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default index;
