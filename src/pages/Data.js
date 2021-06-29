import mercury from '../assets/planet-mercury.svg';
import mercuryInternal from '../assets/planet-mercury-internal.svg';
import mercuryGeology from '../assets/geology-mercury.png';
import venus from '../assets/planet-venus.svg';
import venusInternal from '../assets/planet-venus-internal.svg';
import venusGeology from '../assets/geology-venus.png';
import earth from '../assets/planet-earth.svg';
import earthInternal from '../assets/planet-earth-internal.svg';
import earthGeology from '../assets/geology-earth.png';
import mars from '../assets/planet-mars.svg';
import marsInternal from '../assets/planet-mars-internal.svg';
import marsGeology from '../assets/geology-mars.png';
import jupiter from '../assets/planet-jupiter.svg';
import jupiterInternal from '../assets/planet-jupiter-internal.svg';
import jupiterGeology from '../assets/geology-jupiter.png';
import saturn from '../assets/planet-saturn.svg';
import saturnInternal from '../assets/planet-saturn-internal.svg';
import saturnGeology from '../assets/geology-saturn.png';
import uranus from '../assets/planet-uranus.svg';
import uranusInternal from '../assets/planet-uranus-internal.svg';
import uranusGeology from '../assets/geology-uranus.png';
import neptune from '../assets/planet-neptune.svg';
import neptuneInternal from '../assets/planet-neptune-internal.svg';
import neptuneGeology from '../assets/geology-neptune.png';

export const mercuryOverview = {
  img: mercury,
  visible: false,
  alt: 'mercury planet',
  name: 'mercury',
  fact: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
  source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
  color: 'var(--mercury)',
  link: '/',
  link2: '/Mercury-structure',
  link3: '/Mercury-surface',
};
export const mercuryStructure = {
  img: mercuryInternal,
  visible: false,
  alt: 'mercury planet',
  name: 'mercury',
  fact: "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
  source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
  color2: 'var(--mercury)',
  link: '/',
  link2: '/Mercury-structure',
  link3: '/Mercury-surface',
};
export const mercurySurface = {
  img: mercury,
  img2: mercuryGeology,
  visible: true,
  alt: 'mercury planet',
  name: 'mercury',
  fact: "  Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
  source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
  color3: 'var(--mercury)',
  link: '/',
  link2: '/Mercury-structure',
  link3: '/Mercury-surface',
};

export const mercuryStats = {
  rotation: '58.6 days',
  revolution: '87.97 days',
  radius: '2,439.7 km',
  temp: '430°c',
};

export const venusOverview = {
  img: venus,
  visible: false,
  alt: 'venus planet',
  name: 'venus',
  fact: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
  source: 'https://en.wikipedia.org/wiki/Venus',
  color: 'var(--venus)',
  link: '/Venus',
  link2: '/Venus-structure',
  link3: '/Venus-surface',
};
export const venusStructure = {
  img: venusInternal,
  visible: false,
  alt: 'venus planet',
  name: 'venus',
  fact: '  The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
  source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
  color2: 'var(--venus)',
  link: '/Venus',
  link2: '/Venus-structure',
  link3: '/Venus-surface',
};
export const venusSurface = {
  img: venus,
  img2: venusGeology,
  visible: true,
  alt: 'venus planet',
  name: 'venus',
  fact: 'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
  source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
  color3: 'var(--venus)',
  link: '/Venus',
  link2: '/Venus-structure',
  link3: '/Venus-surface',
};

export const venusStats = {
  rotation: '243 days',
  revolution: '224.7 days',
  radius: '6,051.8 km',
  temp: '471°c',
};

export const earthOverview = {
  img: earth,
  visible: false,
  alt: 'earth planet',
  name: 'earth',
  fact: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
  source: 'https://en.wikipedia.org/wiki/Earth',
  color: 'var(--earth)',
  link: '/Earth',
  link2: '/Earth-structure',
  link3: '/Earth-surface',
};

export const earthStructure = {
  img: earthInternal,
  visible: false,
  alt: 'earth planet',
  name: 'earth',
  fact: "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
  source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
  color2: 'var(--earth)',
  link: '/Earth',
  link2: '/Earth-structure',
  link3: '/Earth-surface',
};

export const earthSurface = {
  img: earth,
  img2: earthGeology,
  visible: true,
  alt: 'earth planet',
  name: 'earth',
  fact: 'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
  source: 'https://en.wikipedia.org/wiki/Earth#Surface',
  color3: 'var(--earth)',
  link: '/Earth',
  link2: '/Earth-structure',
  link3: '/Earth-surface',
};

export const earthStats = {
  rotation: '0.99 days',
  revolution: '365.26 days',
  radius: '6,371 km',
  temp: '16°c',
};
export const marsOverview = {
  img: mars,
  visible: false,
  alt: 'mars planet',
  name: 'mars',
  fact: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
  source: 'https://en.wikipedia.org/wiki/Mars',
  color: 'var(--mars)',
  link: '/Mars',
  link2: '/Mars-structure',
  link3: '/Mars-surface',
};
export const marsStructure = {
  img: marsInternal,
  visible: false,
  alt: 'mars planet',
  name: 'mars',
  fact: 'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
  source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
  color2: 'var(--mars)',
  link: '/Mars',
  link2: '/Mars-structure',
  link3: '/Mars-surface',
};
export const marsSurface = {
  img: mars,
  img2: marsGeology,
  visible: true,
  alt: 'mars planet',
  name: 'mars',
  fact: 'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
  source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
  color3: 'var(--mars)',
  link: '/Mars',
  link2: '/Mars-structure',
  link3: '/Mars-surface',
};

export const marsStats = {
  rotation: '1.03 days',
  revolution: '1.88 years',
  radius: '3,389.5 km',
  temp: '-28°c',
};

export const jupiterOverview = {
  img: jupiter,
  visible: false,
  alt: 'jupiter planet',
  name: 'jupiter',
  fact: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
  source: 'https://en.wikipedia.org/wiki/Jupiter',
  color: 'var(--jupiter)',
  link: '/Jupiter',
  link2: '/Jupiter-structure',
  link3: '/Jupiter-surface',
};

export const jupiterStructure = {
  img: jupiterInternal,
  visible: false,
  alt: 'jupiter planet',
  name: 'jupiter',
  fact: "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
  source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
  color2: 'var(--jupiter)',
  link: '/Jupiter',
  link2: '/Jupiter-structure',
  link3: '/Jupiter-surface',
};

export const jupiterSurface = {
  img: jupiter,
  img2: jupiterGeology,
  visible: true,
  alt: 'jupiter planet',
  name: 'jupiter',
  fact: 'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
  source:
    'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
  color3: 'var(--jupiter)',
  link: '/Jupiter',
  link2: '/Jupiter-structure',
  link3: '/Jupiter-surface',
};

export const jupiterStats = {
  rotation: '9.93 hours',
  revolution: '11.86 years',
  radius: '69,911 km',
  temp: '-108°c',
};

export const saturnOverview = {
  img: saturn,
  visible: false,
  alt: 'saturn planet',
  name: 'saturn',
  fact: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
  source: 'https://en.wikipedia.org/wiki/Saturn',
  color: 'var(--saturn)',
  link: '/Saturn',
  link2: '/Saturn-structure',
  link3: '/Saturn-surface',
};

export const saturnStructure = {
  img: saturnInternal,
  visible: false,
  alt: 'saturn planet',
  name: 'saturn',
  fact: "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
  source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
  color2: 'var(--saturn)',
  link: '/Saturn',
  link2: '/Saturn-structure',
  link3: '/Saturn-surface',
};

export const saturnSurface = {
  img: saturn,
  img2: saturnGeology,
  visible: true,
  alt: 'saturn planet',
  name: 'saturn',
  fact: "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ",
  source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
  color3: 'var(--saturn)',
  link: '/Saturn',
  link2: '/Saturn-structure',
  link3: '/Saturn-surface',
};

export const saturnStats = {
  rotation: '10.8 hours',
  revolution: '29.46 years',
  radius: '58,232 km',
  temp: '-138°c',
};

export const uranusOverview = {
  img: uranus,
  visible: false,
  alt: 'uranus planet',
  name: 'uranus',
  fact: 'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
  source: 'https://en.wikipedia.org/wiki/Uranus',
  color: 'var(--uranus)',
  link: '/Uranus',
  link2: '/Uranus-structure',
  link3: '/Uranus-surface',
};

export const uranusStructure = {
  img: uranusInternal,
  visible: false,
  alt: 'uranus planet',
  name: 'uranus',
  fact: "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
  source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
  color2: 'var(--uranus)',
  link: '/Uranus',
  link2: '/Uranus-structure',
  link3: '/Uranus-surface',
};

export const uranusSurface = {
  img: uranus,
  img2: uranusGeology,
  visible: true,
  alt: 'uranus planet',
  name: 'uranus',
  fact: "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
  source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
  color3: 'var(--uranus)',
  link: '/Uranus',
  link2: '/Uranus-structure',
  link3: '/Uranus-surface',
};

export const uranusStats = {
  rotation: '17.2 hours',
  revolution: '84 years',
  radius: '25,362 km',
  temp: '-195°c',
};

export const neptuneOverview = {
  img: neptune,
  visible: false,
  alt: 'neptune planet',
  name: 'neptune',
  fact: 'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
  source: 'https://en.wikipedia.org/wiki/Neptune',
  color: 'var(--neptune)',
  link: '/Neptune',
  link2: '/Neptune-structure',
  link3: '/Neptune-surface',
};

export const neptuneStructure = {
  img: neptuneInternal,
  visible: false,
  alt: 'neptune planet',
  name: 'neptune',
  fact: "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
  source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
  color2: 'var(--neptune)',
  link: '/Neptune',
  link2: '/Neptune-structure',
  link3: '/Neptune-surface',
};

export const neptuneSurface = {
  img: neptune,
  img2: neptuneGeology,
  visible: true,
  alt: 'neptune planet',
  name: 'neptune',
  fact: "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
  source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
  color3: 'var(--neptune)',
  link: '/Neptune',
  link2: '/Neptune-structure',
  link3: '/Neptune-surface',
};

export const neptuneStats = {
  rotation: '16.08',
  revolution: '164.79 years',
  radius: '24,622 km',
  temp: '-201°c',
};
