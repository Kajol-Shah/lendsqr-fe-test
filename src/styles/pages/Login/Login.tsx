import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.scss";

import logo from "../../../assets/images/logo.svg";
import loginImage from "../../../assets/images/logo-illustration.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // temporary navigation
    navigate("/dashboard");
  };

  return (
    <div className="login">

      {/* LEFT SIDE */}
      <div className="login__left">

        <img
          src={logo}
          alt="logo"
          className="login__logo"
        />

        <img
          src={loginImage}
          alt="illustration"
          className="login__image"
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="login__right">

        <div className="login__form-container">

          <h1 className="login__title">
            Welcome!
          </h1>

          <p className="login__subtitle">
            Enter details to login.
          </p>

          <form
            className="login__form"
            onSubmit={handleLogin}
          >

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              className="login__input"
            />

            {/* PASSWORD */}
            <div className="login__password-wrapper">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Password"
                className="login__input"
              />

              <button
                type="button"
                className="login__show"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>

            </div>

            {/* FORGOT PASSWORD */}
            <button
              type="button"
              className="login__forgot"
            >
              FORGOT PASSWORD?
            </button>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login__button"
            >
              LOG IN
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;