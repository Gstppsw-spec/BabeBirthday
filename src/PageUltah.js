import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageUcapan from "./PageUcapan";

const PageUltah = () => {
  const [showCard, setShowCard] = useState(false);
  const [showUltah, setShowUltah] = useState(true);

  const toggleCard = () => {
    setShowCard(!showCard);
    setShowUltah(!showUltah);
  };
  const navigate = useNavigate();
  return (
    <div>
      {showUltah && (
        <body className="body">
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
        </body>
      )}

      {showCard && <PageUcapan />}
    </div>
  );
};

export default PageUltah;
