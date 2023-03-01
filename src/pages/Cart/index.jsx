import React from "react";
import { useSelector } from "react-redux";
import { shortenProductDescription } from "../../UI/Helpers";
const index = () => {
  const dataInstore = useSelector((data) => data.cart);
  const carts = dataInstore.cartProducts;
  return (
    <>
      <div className="container  mx-auto row">
        {carts.map((item) => {
          return (
            <div className="col-md-3" key={item.id}>
              <div className="cars  col-md-3">
                <img src={item.images[0]} alt="" />
                <h3>{item.category.name}</h3>
                <p>{shortenProductDescription("word", 3, item.description)}</p>
                <p className="fw-bold text-primary">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
