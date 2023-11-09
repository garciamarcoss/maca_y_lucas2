import React, { useEffect, useRef } from "react";
import secondBg from "../assets/img/secondBg1.jpg";
import polaroid from "../assets/img/polaroid.png";
import ele from '../assets/img/ele.png'

const Second = () => {
  const polaroidRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const polaroidElement = polaroidRef.current;
      const isVisible = 0 < window.innerHeight

      if (isVisible) {
        polaroidElement.classList.add('visiblePolaroid')
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="second">
      <img src={secondBg} alt="bgimage" className="bgimage" />
      <div className="polaroid" ref={polaroidRef}>
        <img src={polaroid} alt="polaroid" />
      </div>
      <div className="ele">
        <img src={ele} alt="love" />
      </div>
    </div>
  );
};

export default Second;
