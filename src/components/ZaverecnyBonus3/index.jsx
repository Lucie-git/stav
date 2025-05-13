import { useCasVSekundach } from './hodiny';

/*
Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas
  ve formátu 7:49:05.

Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je
  0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.
*/

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();

  const hours = Math.floor(casVSekundach / 3600);
  const remainSec = casVSekundach % 3600;
  const minutes = Math.floor(remainSec / 60);
  const seconds = remainSec % 60;

  const stringHour = hours.toString().padStart(2, '0');
  const stringMinutes = minutes.toString().padStart(2, '0');
  const stringSeconds = seconds.toString().padStart(2, '0');

  return (
    <>
      Čas právě teď:{' '}
      <b>
        {stringHour}:{stringMinutes}:{stringSeconds}
      </b>
    </>
  );
};
