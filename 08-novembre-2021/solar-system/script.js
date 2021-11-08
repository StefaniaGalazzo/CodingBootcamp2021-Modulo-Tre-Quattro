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
  
const newName = ((solarSystem) => {
    switch (solarSystem.name) {
        case "Sun":
            solarSystem.name = "Sole";
            break;

        case "Mercury":
            solarSystem.name = "Mercurio";
            break;
        
        case "Venus":
            solarSystem.name = "Venere";
        break;

        case "Earth":
        solarSystem.name = "Terra";
        break; 

        case "Mars":
            solarSystem.name = "Marte";
            break; 

            
        case "Jupiter":
            solarSystem.name = "Giove";
            break; 

        case "Saturn":
            solarSystem.name = "Saturno";
            break; 
            
        case "Uranus":
            solarSystem.name = "Urano";
            break; 

        case "Neptune":
            solarSystem.name = "Nettuno";
        }
        return solarSystem
});


const itaName = solarSystem.map(newName);

console.log(itaName);





//   const terrestrial = (planets) => planets.surface === "terrestrial";
//   const smallPlanets = (planets) => planets.radius <= 3000;
//   const stars = (planets) => planets.surface === "star";
  
//   const terrPlanets = solarSystem.filter(terrestrial);
//   const smallTerrPlanets = terrPlanets.filter(smallPlanets);
//   // const smallTerrPlanets = terrPlanets.filter((planets) => planets.radius <= 3000); <-- identico
  
//   const xyz = solarSystem.filter(terrestrial).filter(smallPlanets);
















// considerato che il diametro è il raggio per due volte, scrivere una funzione planetDiameter che ne ritorni il diametro. Usate come riferimento le prime arrow function viste a lezione...