import React , {useState ,useEffect} from 'react'
import { instance } from '../../assets/Api/instance'
import { useParams } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import {BsCart2} from "react-icons/bs"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './search.scss'



const forsearch = () => {
    const {title} = useParams()
    const [data,setData] = useState([])
    useEffect(() => {
        instance.get(`/products?title=${title}`).then((res)=>{
            setData(res.data)
        })
    }, [])
    const dataInstore = useSelector((data) => data.cart);
  const wishlistProducts = useSelector((data) => data.like);

  const [buyProduct, setBuyProducts] = useState([]);
  const buyProducts=buyProduct.splice(0, 5);
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
  return (
    <>
        <div className="container">
            {
                data.map((item)=>{
                    return(
                        <div className="row">
                            <div className="col-4 my-2">
                                <img src={item.images[0]} alt="" className='search-img' />
                            </div>
                            <div className="col-8">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <div className="d-flex justify-content-between">
                                {dataInstore.cartProducts.find(
                          (product) => product.id === item.id
                        ) ? (
                          <button
                            className="btn"
                            onClick={() => {
                              handleRemoveFromCart(item.id);
                            }}
                          >
                            <BsCart2 className="text-danger fs-4" />
                          </button>
                        ) : (
                          <button
                            className="btn "
                            onClick={() => {
                              handleAddToCart(item);
                            }}
                          >
                            <BsCart2 className=" text-secondary  fs-4" />
                          </button>
                        )}
                        <button className="btn btn-danger">
                          <Link
                            to={`/product/${item?.id}`}
                            className="nav-link"
                          >
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
                            <FaHeart className="text-danger fs-4" />
                          </button>
                        ) : (
                          <button
                            className="btn "
                            onClick={() => {
                              handlAddToWishlist(item);
                            }}
                          >
                            <FaHeart className="text-secondary fs-4" />
                          </button>
                        )}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    
    </>
  )
}

export default forsearch