import { useState } from 'react';
import './carousel.css';

/*
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/
const images = [
  '/assets/WLUHO9A_xik.jpg',
  '/assets/DA1eGglMmlg.jpg',
  '/assets/kTxL6le0Wgk.jpg',
  '/assets/7go5UASxmDY.jpg',
  '/assets/YmATDIFsCmQ.jpg',
];

export const Uloha4 = () => {
  const [activeImg, setActiveImg] = useState(0);
  const handleClickNext = () => {
    const nextImg = activeImg + 1;
    setActiveImg(nextImg);
  };
  const handleClickPrev = () => {
    const nextImg = activeImg - 1;
    setActiveImg(nextImg);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__predchozi"
        aria-label="předchozí"
        onClick={handleClickPrev}
        disabled={activeImg === 0}
      >
        ←
      </button>
      <div className="carousel__media">
        <img className="carousel__image" src={`${images[activeImg]}`} alt="" />
      </div>
      <button
        className="carousel__dalsi"
        aria-label="další"
        onClick={handleClickNext}
        disabled={activeImg === images.length - 1}
      >
        →
      </button>
    </div>
  );
};
