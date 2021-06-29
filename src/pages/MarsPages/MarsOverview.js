import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { marsOverview, marsStats } from '../Data';

function MarsOverview() {
  return (
    <>
      <PlanetInfo {...marsOverview} />
      <PlanetStats {...marsStats} />
    </>
  );
}

export default MarsOverview;
