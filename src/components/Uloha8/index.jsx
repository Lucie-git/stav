/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from 'react';

export const Uloha8 = () => {
  const [rain, setRain] = useState('možná');

  const handleClick = () => {
    rain === 'možná' ? setRain('ano') : rain;
    rain === 'ano' ? setRain('ne') : rain;
    rain === 'ne' ? setRain('možná') : rain;
  };
  return (
    <>
      <h3>Prší v Brně: {rain}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
