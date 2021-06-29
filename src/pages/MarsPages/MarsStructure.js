import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { marsStructure, marsStats } from '../Data';

function MarsStructure() {
  return (
    <>
      <PlanetInfo {...marsStructure} />
      <PlanetStats {...marsStats} />
    </>
  );
}

export default MarsStructure;
