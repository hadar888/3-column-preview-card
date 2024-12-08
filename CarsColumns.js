const carsData = [
    {
        img: "images\\icon-sedans.svg",
        title: "Sedans",
        content: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.`,
        color: "orange"
    },
    {
        img: "images\\icon-suvs.svg",
        title: "SUVs",
        content: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
          and <span class="nowrap">off-road</span> adventures.`,
        color: "blue"
    },
    {
        img: "images\\icon-luxury.svg",
        title: "Luxury",
        content: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.`,
        color: "green"
    }
];

const template = document.getElementById("column-template");
const container = document.querySelector("main");

carsData.forEach(carData => {
    const section = template.content.cloneNode(true);
    
    section.querySelector("section").className = "column-" + carData.color;
    section.querySelector("img").src = carData.img;
    section.querySelector("h1").textContent = carData.title;
    section.querySelector("p").innerHTML = carData.content;
    section.querySelector("button").className = "button-" + carData.color;
    
    container.appendChild(section);
})