import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { uranusOverview, uranusStats } from '../Data';

function UranusOverview() {
  return (
    <>
      <PlanetInfo {...uranusOverview} />
      <PlanetStats {...uranusStats} />
    </>
  );
}

export default UranusOverview;
