import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { saturnStructure, saturnStats } from '../Data';

function SaturnStructure() {
  return (
    <>
      <PlanetInfo {...saturnStructure} />
      <PlanetStats {...saturnStats} />
    </>
  );
}

export default SaturnStructure;
