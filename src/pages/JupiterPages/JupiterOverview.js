import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { jupiterOverview, jupiterStats } from '../Data';

function JupiterOverview() {
  return (
    <>
      <PlanetInfo {...jupiterOverview} />
      <PlanetStats {...jupiterStats} />
    </>
  );
}

export default JupiterOverview;
