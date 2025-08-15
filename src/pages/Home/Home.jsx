import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero from "../../assets/hero_banner.jpg";
import heroTitle from "../../assets/hero_title.png";
import playicon from "../../assets/play_icon.png";
import infoicon from "../../assets/info_icon.png";

const Home = () => {
  return (
    <>
      <Navbar />

  
    

<div>

<img src={hero} alt="hero-img"  className="w-full h-auto " />

<div className="absolute bottom-20 left-10 max-w-lg">
         
          <img
            src={heroTitle}
            alt="hero-title"
            className="w-[500px] mb-4"
          /> 

          
          <p className="text-lg mb-6">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p> 

          
          /* <div className="flex gap-4">
      
            <button className="flex items-center justify-center bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition min-w-[140px]">
              <img src={playicon} alt="play" className="w-6 h-6 mr-2" />
              Play
            </button> 

            
            
             <button className="flex items-center justify-center bg-[#6d6d6eb3] px-6 py-2 rounded font-semibold text-white hover:bg-opacity-90 transition min-w-[140px]">
              <img src={infoicon} alt="info" className="w-6 h-6 mr-2" />
              More Info
            </button>
          </div>

</div>


</div>




    </>
  );
};

export default Home;
