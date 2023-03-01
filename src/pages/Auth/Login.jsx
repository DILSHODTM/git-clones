import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiApple } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../assets/images/Ebay-Logo.png";
import { instance } from "../../assets/Api/instance";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";
const Login = () => {
  const data = useSelector((data) => data.login);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({});
  const loginUser = (e) => {
    e.preventDefault();
    instance
      .post("/auth/login", userLogin)
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("token", response.data.access_token),
            dispatch({ email: response.data.email, type: "LOGIN_USER" });
          Navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="sassa">
        <div className="d-flex justify-content-between">
          <Link to="/">
            <img src={Logo} alt="" className="logo" />
          </Link>
        </div>
        <div className="container">
          <div className="">
            <div className="margins">
              <div className="login-form">
                <h2 className="text-center">Hello</h2>
                <div className=" ">
                  <p className="text-center mx-auto fs-14">
                    Sign in to eBay or{" "}
                    <Link to="/register">create an account</Link>{" "}
                  </p>
                </div>
                <div className="container w-50 mx-auto">
                  <form onSubmit={loginUser}>
                    <div className="form-group ">
                      <input
                        type="email"
                        className="form-control  fw-bold mt-5 "
                        placeholder="Email or username"
                        onChange={(e) => {
                          setUserLogin({ ...userLogin, email: e.target.value });
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control  fw-bold mt-5"
                        placeholder="Password"
                        onChange={(e) => {
                          setUserLogin({
                            ...userLogin,
                            password: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="form-group mt-2 text-center">
                      <a href="">
                        <p className="fs-14">Forgot your password?</p>
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 rounded-pill">
                      Continue
                    </button>
                  </form>

                  <d className="d-flex">
                    <div className="line"></div>
                    <p className="text-center mb-0 mt-4 px-3">Or</p>
                    <div className="line"></div>
                  </d>
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill mt-3">
                    <FaFacebook />
                    Continue with Facebook
                  </button>
                  <button
                    type="submit"
                    className="btn border border-3  w-100 rounded-pill mt-3" >
                    <FcGoogle />
                    Continue with Google
                  </button>
                  <button
                    type="submit"
                    className="btn border border-3  w-100 rounded-pill mt-3" >
                    <DiApple className="fs-4 " />
                    Continue with Apple
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
