import React, { useState } from "react";

const Login = () => {
  const [screen, setScreen] = useState("login");

  const [main, setMain] = useState({
    user: "", 
    password: "",
  });

  const [sign, setSign] = useState({
    email: "",
    cPassword: "",
    sPassword: "",
  });

  const handlePage = (e) => {
    const { name, value } = e.target;

    setMain((prev) => ({ ...prev, [name]: value }));
  };

  const handleSign = (e) => {
    const { name, value } = e.target;

    setSign((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(main);
  };
  const handleSignSubmit = (e) => {
    e.preventDefault();
    console.log(sign);
  };

  return (
    <div className="bg-img">
      <div className="cards">
        <div className="d-flex both">
          <button  onClick={() => setScreen("login")} className="login">
            Login
          </button>
          <button onClick={() => setScreen("signup")} className="signup">
            Sign Up
          </button>
        </div>


        {screen === "login" ? (
          <form onSubmit={handleLoginSubmit}>
            <div className="loginPage">
              <div className="logins">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="user"
                  value={main.user}
                  onChange={handlePage}
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={main.password}
                  onChange={handlePage}
                  required
                />
                <button type="submit">Login</button>
                <p>
                  Don’t have on account ? <a href="#">SignUp</a>
                </p>
              </div>
            </div>
          </form>
        ) : (
          <form onChange={handleSignSubmit}>
            <div className="loginPage">
              <div className="logins">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={sign.email}
                  onChange={handleSign}
                  required
                />
                <input
                  type="password"
                  placeholder="password"
                  name="sPassword"
                  value={sign.sPassword}
                  onChange={handleSign}
                  required
                />
                <input
                  type="password"
                  placeholder="current password"
                  name="cPassword"
                  value={sign.cPassword}
                  onChange={handleSign}
                  required
                />
                <button type="submit">Sign Up</button>
                {/* <p>Don’t have on account ? <a href="#">SignUp</a></p> */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
