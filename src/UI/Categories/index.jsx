import React, { useState, useEffect } from "react";
import { instance } from "../../assets/Api/instance";
import { Link } from "react-router-dom";
import "./style.scss";

const index = () => {
  const [datae, setData] = useState([]);
  
  const data=datae.splice(0, 5);
  instance.get(`/categories`).then((res) => {
    setData(res.data);
  });

  return (
    <>
      <div className="container text-center mt-5 mb-4">
        <h2>Categories</h2>
      </div>
      <div className="container w-75 d-flex wraps">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="car text-center  " >
                <Link
                  to={`/category/${item?.id}`}
                  className="text-primary fs-3 nav-link"
                >
                  <img src={item.image} alt="" className="rounded-circle" />
                  <h3>{item.name}</h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;
