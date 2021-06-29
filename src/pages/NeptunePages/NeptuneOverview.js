import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { neptuneOverview, neptuneStats } from '../Data';

function NeptuneOverview() {
  return (
    <>
      <PlanetInfo {...neptuneOverview} />
      <PlanetStats {...neptuneStats} />
    </>
  );
}

export default NeptuneOverview;
