import React, {useState} from "react";
import Announcement from "../components/home/Announcement";
import Footer from "../components/home/Footer";
import Discover from "../components/home/Discover";
import Navbar from "../components/home/Navbar";
import Intro from "../components/home/Intro";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <Announcement />
      <Navbar toggle={toggle} />
        <Intro />       
        <div id="discover" name="discover">
         <Discover />
        </div>
        <Footer/>
      </div>
  );
};

export default Home;
