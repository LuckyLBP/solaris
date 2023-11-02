

// API URL för att hämta ut datan 
const url = "https://majazocom.github.io/Data/solaris.json";

// Funktion för att hämta och skriva ut datan
async function getData() {

    //Hämtar data från API
    const response = await fetch(url);
    const data = await response.json();

    // Hittar namnet för specifik planet i listan
    const planetName = document.getElementById('planet').textContent; // Hittar i HTML-dokumentet
    const planetData = data.find(planet => planet.name === planetName); // Hittar planeten i API och jämför den med "planetName" i HTML-dokumentet

    // Funktionen för att skriva ut datan från API
    if (planetData) {

        // Skriver ut titlarna för planeten
        document.querySelector("h1").textContent = planetData.name; 
        document.querySelector("h2").textContent = planetData.latinName; 

        // Skriver ut statistiken för planeten
        document.querySelector(".circumference p").textContent = `${planetData.circumference.toLocaleString()} km`; // 
        document.querySelector(".sunDistance p").textContent = `${(planetData.distance / 1000000).toLocaleString()} miljoner km`;
        document.querySelector(".maxTemp p").textContent = `${planetData.temp.day}°C`;
        document.querySelector(".minTemp p").textContent = `${planetData.temp.night}°C`;
        document.querySelector("#description").textContent = planetData.desc;

        // Tar reda på om planeten har en måne || Ifall den har måne skriver den ut || Har den ingen måne, skriver den ut: Inga månar
        const moonsElement = document.querySelector(".moons p");
        moonsElement.textContent = planetData.moons.length > 0 ? planetData.moons.join(", ") : "Inga månar";
    } else {

        // Om det inte går att hitta planet data - loggas fel
        console.error('Planet not found');

    }
}

// Anropar på funktionen
getData();
