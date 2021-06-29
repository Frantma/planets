import React from 'react';
import './PlanetStats.css';

function PlanetStats({ rotation, revolution, radius, temp }) {
  return (
    <>
      <div className='container-stat'>
        <div className='stats'>
          <h3 className='stat-name'>rotation time</h3>
          <h2 className='stat'>{rotation}</h2>
        </div>
        <div className='stats'>
          <h3 className='stat-name'>revolution time</h3>
          <h2 className='stat'>{revolution}</h2>
        </div>
        <div className='stats'>
          <h3 className='stat-name'>radius</h3>
          <h2 className='stat'>{radius}</h2>
        </div>
        <div className='stats'>
          <h3 className='stat-name'>average temp.</h3>
          <h2 className='stat'>{temp}</h2>
        </div>
      </div>
    </>
  );
}

export default PlanetStats;
