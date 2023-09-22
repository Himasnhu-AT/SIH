// // script.js
// let map;
// const LOCATION = [
//   { latitude: 29.969513, longitude:76.878281 },
//   { latitude: 29.980662, longitude: 76.867615 },
//   {latitude: 29.964007 , longitude: 76.877235 }
// ];

// function initMap() {
//   map = new Microsoft.Maps.Map(document.getElementById("map"), {
//     center: new Microsoft.Maps.Location(0, 0),
//     zoom: 5,
//   });

//   LOCATION.forEach((location, index) => {
//     const pin = new Microsoft.Maps.Pushpin(
//       new Microsoft.Maps.Location(location.latitude, location.longitude),
//       {
//         title: `Location ${index + 1}`,
//       }
//     );
//     map.entities.push(pin);
//   });
// }


// script.js
let map;
const LOCATION = [
    { latitude: 29.969513, longitude: 76.878281 },
    { latitude: 29.980662, longitude: 76.867615 },
    { latitude: 29.964007, longitude: 76.877235 }
];

function initMap() {
    map = new Microsoft.Maps.Map(document.getElementById("map"), {
        center: new Microsoft.Maps.Location(0, 0),
        zoom: 5,
    });

    LOCATION.forEach((location, index) => {
        const pin = new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(location.latitude, location.longitude),
            {
                title: `Location ${index + 1}`,
            }
        );
        map.entities.push(pin);
    });
}

// Function to show a specific location on the map when a button is clicked
function showLocation(index) {
    // if (map && LOCATION[index]) {
    //     map.setView({ center: new Microsoft.Maps.Location(LOCATION[index].latitude, LOCATION[index].longitude), zoom: 15 });
    // }
    window.location.href = "./landingpage/landingpage.html";
}

