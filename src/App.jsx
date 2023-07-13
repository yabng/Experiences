import { useState } from "react";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Plan from "./components/Plan";
import Rooms from "./components/Rooms";
import Imageslider from "./components/Imageslider";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <Imageslider />
      <Footer />
    </>
  );
}

export default App;
