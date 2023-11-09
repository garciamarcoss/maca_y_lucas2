import React from "react";
import Stefano from '../assets/img/Stefanito.png'

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="imagePreloader">
        <img src={Stefano} alt="Stefano" />
      </div>
    </div>
  );
};

export default Preloader;
