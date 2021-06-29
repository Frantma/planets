import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { venusOverview, venusStats } from '../Data';

function VenusOverview() {
  return (
    <>
      <PlanetInfo {...venusOverview} />
      <PlanetStats {...venusStats} />
    </>
  );
}

export default VenusOverview;
