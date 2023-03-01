import React , {useState, useEffect} from  'react'
import {  shortenProductDescription} from "../Helpers"
import { FaHeart } from "react-icons/fa";
import {BsCart2} from "react-icons/bs"

import "./style.scss";

const index = () => {

   const[loading, setLoading] = useState(false)
   return (
     <>
     {
            loading ? <h1>Loading...</h1> : products.map((item) => {
                return (
                    <div className="cars text-center col-md-3" key={item.id}>
                        <img src={item.images[0]} alt="" />
                        <h3>{item.category.name}</h3>
                     
                        <p>{shortenProductDescription("word", 5, item.description)}</p>
                        <div className="d-flex justify-content-between mt-5">
                        <button className='btn btn-primary' onClick={() => handleAddToCart(item.id)}><BsCart2/> Buy </button>
                        <button className='btn btn-warning' onClick={()=>handlAddToWishlist(item.id)} >
                            <FaHeart />
                        </button>
                        </div>


                        </div>
                )   
            })
        }
     
     </>
   );
};

export default index;