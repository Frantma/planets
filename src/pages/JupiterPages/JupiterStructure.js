import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { jupiterStructure, jupiterStats } from '../Data';

function JupiterStructure() {
  return (
    <>
      <PlanetInfo {...jupiterStructure} />
      <PlanetStats {...jupiterStats} />
    </>
  );
}

export default JupiterStructure;
