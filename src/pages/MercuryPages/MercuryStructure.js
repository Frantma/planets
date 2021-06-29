import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { mercuryStructure, mercuryStats } from '../Data';

function MercuryStructure() {
  return (
    <>
      <PlanetInfo {...mercuryStructure} />
      <PlanetStats {...mercuryStats} />
    </>
  );
}

export default MercuryStructure;
