import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { earthSurface, earthStats } from '../Data';

function EarthSurface() {
  return (
    <>
      <PlanetInfo {...earthSurface} />
      <PlanetStats {...earthStats} />
    </>
  );
}

export default EarthSurface;
