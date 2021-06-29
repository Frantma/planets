import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { mercuryOverview, mercuryStats } from '../Data';

function MercuryOverview() {
  return (
    <>
      <PlanetInfo {...mercuryOverview} />
      <PlanetStats {...mercuryStats} />
    </>
  );
}

export default MercuryOverview;
