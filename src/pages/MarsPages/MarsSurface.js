import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { marsSurface, marsStats } from '../Data';

function MarsSurface() {
  return (
    <>
      <PlanetInfo {...marsSurface} />
      <PlanetStats {...marsStats} />
    </>
  );
}

export default MarsSurface;
