import React from 'react';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import PlanetStats from '../../components/PlanetInfo/PlanetStats';
import { neptuneStructure, neptuneStats } from '../Data';

function NeptuneStructure() {
  return (
    <>
      <PlanetInfo {...neptuneStructure} />
      <PlanetStats {...neptuneStats} />
    </>
  );
}

export default NeptuneStructure;
