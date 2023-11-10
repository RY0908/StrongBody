import React from "react";
import NavBar from "./navBar";
import Header from "./Header";

function Home() {
  return (
    <div className="flex flex-col  overflow-hidden h-screen">
      <NavBar></NavBar>
      <Header></Header>
    </div>
  );
}

export default Home;
