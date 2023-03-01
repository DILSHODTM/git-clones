import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { shortenProductDescription } from "../../UI/Helpers";

const index = () => {
  const wishlistProducts = useSelector((data) => data.like);
  const dataes = wishlistProducts.likedProducts;
  return (
    <>
      <div className="container  mx-auto row">
        {dataes.map((item) => {
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
