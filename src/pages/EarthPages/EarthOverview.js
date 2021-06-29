import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { earthOverview, earthStats } from '../Data';

function EarthOverview() {
  return (
    <>
      <PlanetInfo {...earthOverview} />
      <PlanetStats {...earthStats} />
    </>
  );
}

export default EarthOverview;
