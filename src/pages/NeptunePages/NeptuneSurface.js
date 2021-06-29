import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { neptuneSurface, neptuneStats } from '../Data';

function NeptuneSurface() {
  return (
    <>
      <PlanetInfo {...neptuneSurface} />
      <PlanetStats {...neptuneStats} />
    </>
  );
}

export default NeptuneSurface;
