import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { instance } from "../../assets/Api/instance";
import Logo from "../../assets/images/Ebay-Logo.png";
import { FcGoogle } from "react-icons/fc";

const create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
    avatar: "",
  });

  const createUser = (e) => {
    e.preventDefault();
    instance
      .post("/users/", userData)
      .then((response) => {
        if (response.data.email) {
          instance.post("/auth/login", userData).then((response) => {
            if (response.data.access_token) {
              localStorage.setItem("token", response.data.access_token);
            }
          });
          dispatch({ email: response.data.email, type: "CREATE_USER" });

          setTimeout(() => {
            
            alert("User created successfully");
            
            navigate("/success");
           
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="sassa">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <img src={Logo} alt="" className="" />
          </Link>
          <h3 className="mt-5 fs-6">
            Already a member? <Link to="/login">Sign in</Link>{" "}
          </h3>
        </div>
        <div className="container w-50">
          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center">Create an account</h2>
              <form onSubmit={createUser}>
                <div className="form-group d-flex mt-3 gap-3">
                  <input
                    type="text"
                    className="form-control fw-bold"
                    placeholder="First Name "
                    onChange={(e) => {
                      setUserData({ ...userData, name: e.target.value });
                    }}
                  />

                  <input
                    type="text"
                    className="form-control fw-bold"
                    placeholder="Last  Name "
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control fw-bold"
                    placeholder="Email"
                    onChange={(e) => {
                      setUserData({ ...userData, email: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    className="form-control fw-bold"
                    placeholder="Password"
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="url"
                    className="form-control fw-bold"
                    onChange={(e) => {
                      setUserData({ ...userData, avatar: e.target.value });
                    }}
                    placeholder="Avatar url"
                  />
                </div>
                <div className="form-group d-flex gap-4 mt-3">
                  <input id="html" type="checkbox" />
                  <label>
                    By Creating an account, you agree to our User Agreement and
                    acknowledge reading our User Privacy Notice .
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill mt-3">
                  Create account
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <button className="btn border border-4 w-100 rounded-pill refister-button">
                <FcGoogle /> Continue with Google
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default create;
