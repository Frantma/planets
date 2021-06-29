import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { saturnSurface, saturnStats } from '../Data';

function SaturnSurface() {
  return (
    <>
      <PlanetInfo {...saturnSurface} />
      <PlanetStats {...saturnStats} />
    </>
  );
}

export default SaturnSurface;
