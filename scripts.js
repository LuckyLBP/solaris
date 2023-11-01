
const url = "https://majazocom.github.io/Data/solaris.json";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    const planetName = document.getElementById('planet').textContent;

    const planetData = data.find(planet => planet.name === planetName);
    if (planetData) {
        document.querySelector("h1").textContent = planetData.name;
        document.querySelector("h2").textContent = planetData.latinName;
        document.querySelector(".circumference p").textContent = `${planetData.circumference.toLocaleString()} km`;
        document.querySelector(".sunDistance p").textContent = `${(planetData.distance / 1000000).toLocaleString()} miljoner km`;
        document.querySelector(".maxTemp p").textContent = `${planetData.temp.day}°C`;
        document.querySelector(".minTemp p").textContent = `${planetData.temp.night}°C`;
        document.querySelector("#description").textContent = planetData.desc;
        const moonsElement = document.querySelector(".moons p");
        moonsElement.textContent = planetData.moons.length > 0 ? planetData.moons.join(", ") : "Inga månar";
    } else {
        console.error('Planet data not found');
    }
}

getData();
