import { useState } from 'react';
import './style.css';
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  return (
    <div className="bonus4">
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => {
          setFirstValue(e.target.value);
        }}
      />
      +
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => {
          setSecondValue(e.target.value);
        }}
      />
      =<output>{Number(firstValue) + Number(secondValue)}</output>
    </div>
  );
};

/*
return (
    <div className="bonus4">
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => {
          setFirstValue(e.target.valueAsNumber);
        }}
      />
      +
      <input
        type="number"
        defaultValue="0"
        onChange={(e) => {
          setSecondValue(e.target.valueAsNumber);
        }}
      />
      =<output>{firstValue + secondValue}</output>
    </div>
  );
*/
