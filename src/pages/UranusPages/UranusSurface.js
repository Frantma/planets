import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { uranusSurface, uranusStats } from '../Data';

function UranusSurface() {
  return (
    <>
      <PlanetInfo {...uranusSurface} />
      <PlanetStats {...uranusStats} />
    </>
  );
}

export default UranusSurface;
