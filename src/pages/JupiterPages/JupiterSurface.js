import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { jupiterSurface, jupiterStats } from '../Data';

function JupiterSurface() {
  return (
    <>
      <PlanetInfo {...jupiterSurface} />
      <PlanetStats {...jupiterStats} />
    </>
  );
}

export default JupiterSurface;
