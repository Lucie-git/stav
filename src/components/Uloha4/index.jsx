import './carousel.css';

/*
Zadání 1: Nachystejte si adresy obrázků níže do pole.
Zadání 2: Přidejte komponentě stavovou proměnnou, ve které bude index právě aktivního obrázku.
  Na začátku 0.
Zadání 3: Pro `src` v tagu `img` použijte adresu z pole pod správným indexem.
Zadání 4: Tlačítky ← a → měňte index.

Bonus: Pozor na krajní hodnoty. Pokud dojdete na konec nebo začátek pole, tak už v daném směru
  neměňte index, aby neutekl mimo položky v poli. Nastavte tlačítkům atribut `disabled`, pokud
  v jejich směru už není žádný obrázek.
*/

/*
  Adresy obrázků:
  /assets/WLUHO9A_xik.jpg
  /assets/DA1eGglMmlg.jpg
  /assets/kTxL6le0Wgk.jpg
  /assets/7go5UASxmDY.jpg
  /assets/YmATDIFsCmQ.jpg
*/

export const Uloha4 = () => {
  return (
    <div className="carousel">
      <button className="carousel__predchozi" aria-label="předchozí">
        ←
      </button>
      <div className="carousel__media">
        <img
          className="carousel__image"
          src="https://source.unsplash.com/7go5UASxmDY/880x500"
          alt=""
        />
      </div>
      <button className="carousel__dalsi" aria-label="další">
        →
      </button>
    </div>
  );
};
