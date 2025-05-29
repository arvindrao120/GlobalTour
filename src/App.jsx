import React from "react";
import Header from "./pages/Header";
import About from "./pages/About";
import Showcars from "./pages/Showcars";
import Meet from "./pages/Meet";

function App() {
  return (
    <>
      <Header />
      {/* <About /> */}
      <Meet/>
      <Showcars/>
    </>
  );
}

export default App;
