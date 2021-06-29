import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { earthStructure, earthStats } from '../Data';

function EarthStructure() {
  return (
    <>
      <PlanetInfo {...earthStructure} />
      <PlanetStats {...earthStats} />
    </>
  );
}

export default EarthStructure;
