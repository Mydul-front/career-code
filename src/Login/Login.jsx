import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import loginLotties from "../assets/login.json";
import Lottie from "lottie-react";
import SocialLogin from "../Layout/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  console.log("location in sign in page", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
        if (result.user) {
          alert("Login is done");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <Lottie animationData={loginLotties} style={{ width: "300px" }} />
          <div className="card-body">
            <form onSubmit={handleLogin} className="fieldset">
              <h1 className="text-2xl font-bold text-green-500">Login User</h1>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <SocialLogin from={from}></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
