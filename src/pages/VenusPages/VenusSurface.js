import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { venusSurface, venusStats } from '../Data';

function VenusSurface() {
  return (
    <>
      <PlanetInfo {...venusSurface} />
      <PlanetStats {...venusStats} />
    </>
  );
}

export default VenusSurface;
