import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './Index.css'
import About from './pages/About';
import Blog from './pages/Blog';
import PricingPage from './pages/PricingPage';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog/:page",
    element: <Blog />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);