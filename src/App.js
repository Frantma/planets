import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Mercury from './pages/MercuryPages/MercuryOverview';
import MercuryStructure from './pages/MercuryPages/MercuryStructure';
import MercurySurface from './pages/MercuryPages/MercurySurface';
import Venus from './pages/VenusPages/VenusOverview';
import VenusStructure from './pages/VenusPages/VenusStructure';
import VenusSurface from './pages/VenusPages/VenusSurface';
import Earth from './pages/EarthPages/EarthOverview';
import EarthStructure from './pages/EarthPages/EarthStructure';
import EarthSurface from './pages/EarthPages/EarthSurface';
import Mars from './pages/MarsPages/MarsOverview';
import MarsStructure from './pages/MarsPages/MarsStructure';
import MarsSurface from './pages/MarsPages/MarsSurface';
import Jupiter from './pages/JupiterPages/JupiterOverview';
import JupiterStructure from './pages/JupiterPages/JupiterStructure';
import JupiterSurface from './pages/JupiterPages/JupiterSurface';
import Saturn from './pages/SaturnPages/SaturnOverview';
import SaturnStructure from './pages/SaturnPages/SaturnStructure';
import SaturnSurface from './pages/SaturnPages/SaturnSurface';
import Uranus from './pages/UranusPages/UranusOverview';
import UranusStructure from './pages/UranusPages/UranusStructure';
import UranusSurface from './pages/UranusPages/UranusSurface';
import Neptune from './pages/NeptunePages/NeptuneOverview';
import NeptuneStructure from './pages/NeptunePages/NeptuneStructure';
import NeptuneSurface from './pages/NeptunePages/NeptuneSurface';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Mercury} />
          <Route path='/Mercury-structure' exact component={MercuryStructure} />
          <Route path='/Mercury-surface' exact component={MercurySurface} />
          <Route path='/Venus' exact component={Venus} />
          <Route path='/Venus-structure' exact component={VenusStructure} />
          <Route path='/Venus-surface' exact component={VenusSurface} />
          <Route path='/Earth' exact component={Earth} />
          <Route path='/Earth-structure' exact component={EarthStructure} />
          <Route path='/Earth-surface' exact component={EarthSurface} />
          <Route path='/Mars' exact component={Mars} />
          <Route path='/Mars-structure' exact component={MarsStructure} />
          <Route path='/Mars-surface' exact component={MarsSurface} />
          <Route path='/Jupiter' exact component={Jupiter} />
          <Route path='/Jupiter-structure' exact component={JupiterStructure} />
          <Route path='/Jupiter-surface' exact component={JupiterSurface} />
          <Route path='/Saturn' exact component={Saturn} />
          <Route path='/Saturn-structure' exact component={SaturnStructure} />
          <Route path='/Saturn-surface' exact component={SaturnSurface} />
          <Route path='/Uranus' exact component={Uranus} />
          <Route path='/Uranus-structure' exact component={UranusStructure} />
          <Route path='/Uranus-surface' exact component={UranusSurface} />
          <Route path='/Neptune' exact component={Neptune} />
          <Route path='/Neptune-structure' exact component={NeptuneStructure} />
          <Route path='/Neptune-surface' exact component={NeptuneSurface} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
