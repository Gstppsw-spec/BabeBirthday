import React from "react";
import { useState } from "react";
import PageUltah from "./PageUltah";
import { Photo } from "./Photo";

const PageUcapan = () => {
  const [showCard, setShowCard] = useState(false);
  const [showUltah, setShowUltah] = useState(true);

  const toggleCard = () => {
    setShowCard(!showCard);
    setShowUltah(!showUltah);
  };
  return (
    <div>
      {showUltah && (
        <div className="bodyUcapan">
          <div className="birthdayCard">
            <div className="cardFront">
              <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
              <div className="balloons">
                <div className="balloonOne" />
                <div className="balloonTwo" />
                <div className="balloonThree" />
                <div className="balloonFour" />
              </div>
            </div>
            <div className="cardInside">
              <h3 className="back">HAPPY BIRTHDAY Babeee!</h3>
              <p>
                Dear Lover <>&#9829;</>,{" "}
              </p>
              <p>
                There are no words I could use to describe the love we share.
                I'm so incredibly thankful for you. Happy birthday to my love!
                Thank you for being the best part of my happiness and joy. I
                wish our happiness never ends <>&#9829;. </>
              </p>
              <p className="name">
                Bubub<>&#9829;</>
              </p>
            </div>
          </div>
          <button className="button back" onClick={toggleCard}>
            <i className="arrow right"></i>
          </button>
        </div>
      )}

      {showCard && <Photo />}
    </div>
  );
};

export default PageUcapan;
