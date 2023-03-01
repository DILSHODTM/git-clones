import React, { useState, useEffect } from "react";
import { instance } from "../../assets/Api/instance";
import { Link } from "react-router-dom";

const search = () => {
  const [categorie, setCategories] = useState([]);
  const categories = categorie.splice(0, 5);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    instance.get("/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);



 const inputValueRender = (e) => {
    setSearch(e.target.value);

    };

//  const searchRender = (e) => {
//     e.preventDefault();
  
//         window.location.href=`/search/${search}`

//         };

  return (
    <>
      <form   >
        <input
          type="text"
          className="form-controls border border-dark border-end-0" onChange={inputValueRender}
        />
        <select
          name=""
          id=""
          className="category-btn border border-start-0 border-dark px-2 mt-1"
        >
          {categories.map((item) => {
            return (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>

          <Link to={`/search/${search}`}
          > <button className="btn btn-primary btns btn-search">Search</button>
          </Link>
//         <button className="btn btn-primary btns btn-search">Search</button>
      </form>
    </>
  );
};

export default search;
