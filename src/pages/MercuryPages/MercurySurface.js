import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { mercurySurface, mercuryStats } from '../Data';

function MercurySurface() {
  return (
    <>
      <PlanetInfo {...mercurySurface} />
      <PlanetStats {...mercuryStats} />
    </>
  );
}

export default MercurySurface;
