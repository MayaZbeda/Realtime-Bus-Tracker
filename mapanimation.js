mapboxgl.accessToken = 'pk.eyJ1IjoibWF5YXpiZWRhMDEiLCJhIjoiY2xjbnA3N2l3MWdydDNxcGNyc3k5dTRkNCJ9.zgnQ3gzIC6XLvjcb5VXdgw';
const buses = {};

// Map
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [-71.104081, 42.365554],
  zoom: 13,
});

//All bus stops for MIT route
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.093729, 42.359244]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.094915, 42.360175]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.095800, 42.360698]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.099558, 42.362953]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.103476, 42.365248]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.106067, 42.366806]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.108717, 42.368355]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.110799, 42.369192]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.113095, 42.370218]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.115476, 42.372085]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.117585, 42.373016]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-71.118625, 42.374863]
      },
      properties: {
        title: 'Mapbox',
        description: 'Bus Stop'
      }
    }
  ]
};

//When the button is pressed, toggles MIT bus stop display



function show(){
  for (const feature of geojson.features) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}}



map.addControl(new mapboxgl.NavigationControl());

// creates marker for each bus
const makeMarker = function (lng, lat) {
  return new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};

// updates marker
const updateMarker = function (marker, lng, lat) {
  marker.setLngLat([lng, lat]);
};

//active bus information
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
  const response = await fetch(url);
  const json     = await response.json();
  return json.data;
  }
async function run(){
  const locations = await getBusLocations(); // ping for bus location
  locations.forEach((bus) => {
    if (buses[bus.attributes.label]) {
      updateMarker(buses[bus.attributes.label], bus.attributes.longitude, bus.attributes.latitude); // attempts to update
   } 
    else {
      buses[bus.attributes.label] = makeMarker(bus.attributes.longitude, bus.attributes.latitude); // adds 
   }; 
  });
  setTimeout(run, 15000);
};

run();