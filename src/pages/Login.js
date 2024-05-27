import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      navigate("/dashboard");
    } else {
      alert("Username or/and password is wrong !!!");
    }
  }

  return (
    <>
      <Navbar />
      <div className="auth--hero">
        <form className="auth--container" onSubmit={handleLogin}>
        <div className="auth--heading">Login</div>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Login" />
        <div className="auth--footer">Dont Have an account? <Link to="/sign-up">Sign up</Link></div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
