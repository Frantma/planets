import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { saturnOverview, saturnStats } from '../Data';

function SaturnOverview() {
  return (
    <>
      <PlanetInfo {...saturnOverview} />
      <PlanetStats {...saturnStats} />
    </>
  );
}

export default SaturnOverview;
