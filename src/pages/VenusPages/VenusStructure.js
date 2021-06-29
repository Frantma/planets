import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { venusStructure, venusStats } from '../Data';

function VenusStructure() {
  return (
    <>
      <PlanetInfo {...venusStructure} />
      <PlanetStats {...venusStats} />
    </>
  );
}

export default VenusStructure;
