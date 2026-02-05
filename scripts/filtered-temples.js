// =============== Button for Dynamic Mobile and Desktop Views ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
//========================= Object for Lazy Loading=================================//
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
];
// ======================= Filtering Temple images=======================//
function templeFiltering(criteria) {
    //============== old temple filter=============//
    const oldTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
    });

    if (criteria === "old") {
        return oldTemples;
    }

    //============== new temple filter=============//
    const newTemples = temples.filter(t => {
        const year2 = parseInt(t.dedicated.split(",")[0]);
        return year2 >= 1900;
    });
    if (criteria === "new") {
        return newTemples;
    }

    //============== small temple filter=============//
    const smallTemples = temples.filter(t => t.area < 10000);
    if (criteria === "small") {
        return smallTemples;
    }

    //============== large temple filter=============//
    const largeTemples = temples.filter(t => t.area > 10000);
    if (criteria === "large") {
        return largeTemples;
    }

}


// ======================= Rendering Temple Images=======================//
function renderTemples(list) {
    const main = document.querySelector("main");
    main.innerHTML = "";

    list.forEach(t => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h2");
        name.textContent = t.templeName;

        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = t.imageUrl;
        img.alt = t.templeName;
        img.loading = "lazy";

        const caption = document.createElement("figcaption");
        caption.innerHTML = `
        <strong>Location:</strong> ${t.location}<br>
        <strong>Dedicated:</strong> ${t.dedicated}<br>
        <strong>Area:</strong> ${t.area} sq ft
    `;

        figure.appendChild(img);
        figure.appendChild(caption);

        card.appendChild(name);
        card.appendChild(figure);

        main.appendChild(card);
    });
}

// ======================== Adding a Click Method =================//
document.querySelector("#home").addEventListener('click', () => {
    renderTemples(temples);
})
document.querySelector("#old").addEventListener('click', () => {
    renderTemples(templeFiltering("old"));
})
document.querySelector("#new").addEventListener('click', () => {
    renderTemples(templeFiltering("new"));
})
document.querySelector("#small").addEventListener('click', () => {
    renderTemples(templeFiltering("small"));
})
document.querySelector("#large").addEventListener('click', () => {
    renderTemples(templeFiltering("large"));
})


document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

renderTemples(temples);