// import { Outlet } from 'react-router-dom'
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Players from "./Components/Players";
import Footer from "./Components/Footer";

function App() {
  const [coins, setCoins] = useState(0);
  const handleCoins = () => {
    setCoins((prev) => prev + 100);
  };
  return (
    <>
      <div className="max-w-7xl m-auto ">
        <Header coins={coins} />
        <Hero changeCoins={handleCoins} />
        <Players />
      </div>
        <Footer/>
      
    </>
  );
}

export default App;
