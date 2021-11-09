// 2. Sulla base dell'oggetto solarSystem visto a lezione, creare delle funzioni che:
// convertano il valore della chiave name in Italiano. Per esempio, Saturn diverrà Saturno.


const solarSystem = [
    { name: "Sun", radius: 696340, surface: "star" },
    { name: "Mercury", radius: 2440, surface: "terrestrial" },
    { name: "Venus", radius: 6052, surface: "terrestrial" },
    { name: "Earth", radius: 6371, surface: "terrestrial" },
    { name: "Mars", radius: 3389, surface: "terrestrial" },
    { name: "Jupiter", radius: 69911, surface: "gas giant" },
    { name: "Saturn", radius: 58232, surface: "gas giant" },
    { name: "Uranus", radius: 25362, surface: "ice giant" },
    { name: "Neptune", radius: 24622, surface: "ice giant" },
  ];

// convertire i nomi in italiano

// const newNames = ((solarSystem) => {
//     switch (solarSystem.name) {
//         case "Sun":
//             solarSystem.name = "Sole";
//             break;

//         case "Mercury":
//             solarSystem.name = "Mercurio";
//             break;
        
//         case "Venus":
//             solarSystem.name = "Venere";
//         break;

//         case "Earth":
//         solarSystem.name = "Terra";
//         break; 

//         case "Mars":
//             solarSystem.name = "Marte";
//             break; 

            
//         case "Jupiter":
//             solarSystem.name = "Giove";
//             break; 

//         case "Saturn":
//             solarSystem.name = "Saturno";
//             break; 
            
//         case "Uranus":
//             solarSystem.name = "Urano";
//             break; 

//         case "Neptune":
//             solarSystem.name = "Nettuno";
//         }
//         return solarSystem
// });

const planetsName = solarSystem.map(planet => planet.name);

const translatePlanet = planetsName.map( planet => {
    if (planet === 'Sun') return 'Sole';
    if (planet === 'Mercury') return 'Mercurio';
    if (planet === 'Venus') return 'Venere';
    if (planet === 'Earth') return 'Terra';
    if (planet === 'Mars') return 'Marte';
});


// console.log(translatePlanet );


// aggiungo una nuova key agli elementi (aggiungere ciclo come sopra)
solarSystem.map(planet => {
    planet.nome = 'Sole'
});
console.log(solarSystem);


// considerato che il diametro è il raggio per due volte, 
// scrivere una funzione planetDiameter che ne ritorni il diametro. 
// Usate come riferimento le prime arrow function viste a lezione...

const planetDiameter = (planets) => planets.radius * 2;
const diameters = solarSystem.map(planetDiameter);




















