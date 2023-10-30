import React from "react";
import "./App.css";
import { useState } from "react";
import PageUcapan from "./PageUcapan";
import babe from "./babee.jpg";
import undua from "./assets/unyu-tiga.gif"

const PageUltah = () => {
  const [showCard, setShowCard] = useState(false);
  const [showUltah, setShowUltah] = useState(true);

  const toggleCard = () => {
    setShowCard(!showCard);
    setShowUltah(!showUltah);
  };

  return (
    <div>
      {showUltah && (
        <div className="body">
          <img src={undua} width={200} />
          <div className="container">
            <span>Happy</span>
            <span> Birthday</span>
            <span>
              <>&nbsp;</>
            </span>
            <span>S</span>
            <span>a</span>
            <span>y</span>
            <span>{/* <>&nbsp;</> */}</span>
            <span>a</span>
            <span>n</span>
            <span>g</span>
            <span>
              <>&nbsp;</>
            </span>
            <span>
              <>&#9829;</>
            </span>
          </div>
          <button className="button" onClick={toggleCard}>
            <i className="arrow right"></i>
          </button>
        </div>
      )}

      {showCard && <PageUcapan />}
    </div>
  );
};

export default PageUltah;
