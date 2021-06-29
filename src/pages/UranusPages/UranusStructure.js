import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { uranusStructure, uranusStats } from '../Data';

function UranusStructure() {
  return (
    <>
      <PlanetInfo {...uranusStructure} />
      <PlanetStats {...uranusStats} />
    </>
  );
}

export default UranusStructure;
