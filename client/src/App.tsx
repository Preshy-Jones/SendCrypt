import { useState } from "react";
import { Navbar, Footer, Services, Welcome, Transactions } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
