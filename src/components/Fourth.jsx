import React, { useState } from "react";
import fouthBg from "../assets/img/fourthBg1.jpg";
import ideas from "../assets/img/ideas.png";
import flechaMarron from "../assets/img/flechamarron.png";
import googleMaps from "../assets/img/googlemaps.png";
import flechaRoja from "../assets/img/flecharoja.png";
import circle from "../assets/img/circulorojo.png";
import hearts from "../assets/img/corazones.png";
import cbu from "../assets/img/cbu.png";
import CbuModal from "./CbuModal";

const Fourth = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  }; 

  return (
    <div className="fourth">
      <img src={fouthBg} alt="" className="bgimage" />
      <div className="ideas">
        <a href="https://pin.it/7ztBaze">
          <img src={ideas} alt="ideas" />
        </a>
      </div>
      <div className="flechaMarron">
        <img src={flechaMarron} alt="flecha" />
      </div>
      <div className="flechaRoja">
        <img src={flechaRoja} alt="flecha" />
      </div>
      <div className="googleMaps">
        <a href="https://g.co/kgs/vSuDvj">
          <img src={googleMaps} alt="GoogleMaps" />
        </a>
      </div>
      <div className="circle">
        <img src={circle} alt="circle" />
      </div>
      <div className="hearts">
        <img src={hearts} alt="Corazones" />
      </div>
      <div className="flechaRoja2">
        <img src={flechaRoja} alt="flecha" />
      </div>
      <div className="cbu">
        <button className="modalBtn" onClick={() => setOpenModal(true)}>
          <img src={cbu} alt="cbu" />
        </button>
          <CbuModal open={openModal} onClose={handleModalClose} />
      </div>
    </div>
  );
};

export default Fourth;
