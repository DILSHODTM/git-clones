import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Ebay-Logo.png";
import { useNavigate } from "react-router-dom";

import "./style.scss";
 
const success = () => {
  const [usernameS, setUsernameS] = useState([]);
 const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((username) => {
        setUsernameS(username);
      });
  }
  
  
  const reloadPage=()=>{
      
    
     navigate("/")
   setTimeout(() => {
         window.location.reload();   
            
        }, 500);
    
    
   
  }
  
  
  

  return (
    <>
      <main className="sassa">
        <div className="d-flex justify-content-between mt-5 ms-5">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="container">
          <div className="">
            <div className="margins">
              <div className="container w-75">
                <h3>Register success</h3>
                <p>
                  Thank you for registering with eBay. You will receive a
                  confirmation email shortly.
                </p>
                <div className="row">
                  <img src={usernameS.avatar} className="avatar" alt="" />

                  <div className="col-md-6">
                    <h5>Account Information</h5>
                    <p>Username: {usernameS.email}</p>
                    <p>Password: ********</p>
                    <p>name: {usernameS.name} </p>
                  </div>
                </div>
                <p>Click here to return to the home page.</p>

                  <button className="btn btn-primary" onClick={reloadPage} >Home</button>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default success;
