const currentYear = new Date().getFullYear(); // Takes the programer's computer date
document.getElementById("currentyear").innerHTML = `©️${currentYear}`;  // Copy right year

document.getElementById("lastModified" ).innerHTML = document.lastModified; // Last Modifed Tracker


const products = [// products array
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const select = document.querySelector('#product'); // Deploys to HTML id product

products.forEach(product => {// Displays the array
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

