import React from "react";
import sunflower from "../assets/img/girasol.png";
import firstBg from "../assets/img/firstBg1.jpg";
import dateImg from "../assets/img/date.png";
const First = () => {

  return (
    <div>
      <div className="first">
        <img src={firstBg} alt="bgimage" className="bgimage" />
        <div className="sunflower sunflower1">
          <img src={sunflower} alt="sunflower" />
        </div>
        <div className="sunflower sunflower2">
          <img src={sunflower} alt="sunflower" />
        </div>
        <div className="sunflower sunflower3">
          <img src={sunflower} alt="sunflower" />
        </div>
        <div className="dateImg">
          <img src={dateImg} alt="dateImg" />
        </div>
      </div>
    </div>
  );
};

export default First;
