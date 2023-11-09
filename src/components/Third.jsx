import React, { useEffect, useState } from "react";
import thirdBg from "../assets/img/thirdBg1.jpg";
import butterflies from "../assets/img/mariposas.png";
import lights from '../assets/img/luces.png'
import daisies from '../assets/img/dosmargaritas.png'

const Third = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const info = "WHAT'S THE PLAN";
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let updatedText = isDeleting
      ? info.substring(0, text.length - 1)
      : info.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }
    if (!isDeleting && updatedText === info) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setDelta(500)
    }
  };

  return (
    <div className="third">
      <img src={thirdBg} alt="bgimage" className="bgimage" />
      <div className="lights">
        <img src={lights} alt="luces" />
      </div>
      <div className="butterflies">
        <img src={butterflies} alt="sunflower" />
      </div>
      <div className="textPlan">
        <span>{text}</span>
        <span className="blinkingCursor">|</span>
      </div>
      <div className="daisies">
        <img src={daisies} alt="margaritas" />
      </div>
    </div>
  );
};

export default Third;
