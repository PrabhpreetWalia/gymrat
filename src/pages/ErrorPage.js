import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Error from "../components/Error/Error.js";

function ErrorPage() {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
}

export default ErrorPage;
