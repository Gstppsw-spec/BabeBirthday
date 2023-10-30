import React, { useState } from "react";
import babe from "./babee.jpg";
import Kelip from "./Kelip";
import unsatu from "./assets/unyu.gif";
import untiga from "./assets/unyu-tiga.gif"
import unlima from "./assets/unyu-lima.gif"
import untujuh from "./assets/unyu-tujuh.gif"
import babedua from "./assets/babe.jpg"
import babetiga from "./assets/babe-dua.jpg"
import babeemat from "./assets/babe-tiga.jpg"
import babelima from "./assets/babe-empat.jpg"

export const Photo = () => {
  const [show, setShow] = useState(false);

  const toogleCard = () => {
    setShow(!show);
  };
  console.log(show);
  return (
    <div className="container-photos">
      <Kelip /> 
      <img src={unsatu} width={200} />
      {/* <p className="p-desc">HAPPY BIRTHDAY SAYANGGG!</p> */}
      <p className="p-desc">HAPPY BIRTHDAY SAYANGGG! <br/>
      So grateful to have u in my life sayang!</p>
      <div className="photos">
        <img src={babe} width={200} onClick={toogleCard} />
      </div>
      <img src={untiga} width={200} />
      <p className="p-desc">Semoga yang kamu doakan segera tercapai!</p>
      <div className="photos">
        <img src={babedua} width={200} onClick={toogleCard} />
      </div>
      <img src={unlima} width={200} />
      <p className="p-desc">Semoga lama dibumi ya sayang!</p>
      <div className="photos">
        <img src={babetiga} width={200} onClick={toogleCard} />
      </div>
      <img src={untujuh} width={200} />
      <p className="p-desc">Tambah tua jangan gampang bete lagi yaa!</p>
      <div className="photos">
        <img src={babelima} width={200} onClick={toogleCard} />
      </div>
      <div>
        <p className="p-desc">Udah sayang gitu aja, sekali lagi selamat ulang tahun yang ke 22 tahun untuk kamu orang yang istimewa buat aku!
          Semoga diumur kamu yang bertambah ini, kamu semakin dewasa, menjadi pribadi yang lebih baik dan
          semakin bijaksana. Terimakasih ya sayang udah lahir kedunia ini.
          Mwah lopyu sayangggg!!! <>&#9829;</> <>&#9829;</> 
        </p>
      </div>
    </div>
  );
};
