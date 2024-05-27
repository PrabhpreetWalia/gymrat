import "./Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/sign-up", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.created) {
      navigate("/login");
    } else {
      alert("Email already exist");
    }
  }

  return (
    <>
      <Navbar />
      <div className="auth--hero">
        <form className="auth--container" onSubmit={handleSignUp}>
          <div className="auth--heading">Sign Up</div>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <input type="submit" value="Sign Up" />
          <div className="auth--footer">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
