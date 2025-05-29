import React from "react";
import Header from "./pages/Header";
import About from "./pages/About";
import ShowTour from "./pages/ShowTour";
import Meet from "./pages/Meet";
import ShowCars from "./pages/Showcars";

function App() {
  return (
    <>
      <Header />
      <Meet />
      <ShowTour />
      <ShowCars />
    </>
  );
}

export default App;
