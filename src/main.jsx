import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
import HeroPage from "./pages/HeroPage/HeroPage.jsx";
import Root from "./Root.jsx";
import AboutUs from "./pages/NavPages/AboutUs.jsx";
import Service from "./pages/NavPages/Service.jsx";
import CarBooking from "./pages/NavPages/CarBooking.jsx";
import Gallery from "./pages/NavPages/Gallery.jsx";
import Contact from "./pages/NavPages/Contact.jsx";
import Details from "./Components/Details.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<HeroPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/service" element={<Service />} />
      <Route path="/carBooking" element={<CarBooking />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail" element={<Details />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
