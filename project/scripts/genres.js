
// =================== Button works ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



// ====================== ============================//
const genres = [{
    title: "YouTube",
    genre: "Action",
    imageurl: "https://www.youtube.com"
},
{
    title: "YouTube",
    genre: "Action",
    imageurl: "https://www.youtube.com"
    },
{
    title: "YouTube",
    catagory: "Action",
    imageurl: "https://www.youtube.com"
}
];

const main = document.querySelector('main'); // targeting the main element in html
const nav = document.createElement('nav'); // creating a seprate nav menu that will be with in nav
nav.classList.add('genres')
main.appendChild(nav);

// Building HTML tags and sorting genres alphebetically 
const buildGenreTab = (genre) =>{
    const li = document.createElement('li'); // li tags
    const a = document.createElement('a'); // a tags

    a.textContent = genre.catagory;
    a.href = '#';

    //click function
    a.addEventListener('click', () => {
        main.innerHTML = '';
        main.appendChild(nav);
        
        // display video info
        const p = document.createElement('p'); // a tag
        p.textContent = genre.catagory;

        // handing images
        const img = document.createElement('img');
        img.src = genre.imageurl; // this is videos are deployed
        img.loading = 'lazy'; // lazy loading added

        // deploying to main
        main.appendChild(p);
        main.appendChild(img);
    });

    li.appendChild(a);
    nav.appendChild(li);
};


genres.forEach(genre => buildGenreTab(genre));