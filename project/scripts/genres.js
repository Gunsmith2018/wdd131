
// =================== Button works ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});



// ====================== ============================//
const genres = [
  { title: "Demo", catagory: "Action", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Adventure", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Animation", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Biography", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Comedy", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Crime", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Documentary", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Drama", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Family", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Fantasy", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "History", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Horror", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Kids", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Music", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Musical", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Mystery", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "News", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Reality", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Romance", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Sci-Fi", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Shorts", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Sports", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Stand-Up", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Superhero", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Talk Show", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Thriller", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Travel", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "War", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Western", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Young Adult", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Classic", imageurl: "images/demo.webp" },
  { title: "Demo", catagory: "Holiday", imageurl: "images/demo.webp" }
];



const main = document.querySelector('main'); // targeting the main element in html
const uniqueCategories  = [...new Set(genres.map(g => g.catagory))];

const loadGenres = () => {
// targeting main
    main.innerHTML = "";
// creating div for class edits
    const container = document.createElement('div');
    container.classList.add('genres-grid');
    main.appendChild(container);

    uniqueCategories.forEach(catagory => {
        const card = document.createElement('div');
        card.classList.add('genre-card');
        card.textContent = catagory;

        // click that will open a list of movies in that catagory
        card.addEventListener('click', () => {
            loadCategory(catagory);
        });
                
        container.appendChild(card);
    });
}
const loadCategory = (catagory) => {
    main.innerHTML = "";

    const section = document.createElement('section');
    section.classList.add('genre-row');

    const h2 = document.createElement('h2');
    h2.textContent = catagory;
    section.appendChild(h2);

    const row = document.createElement('div');
    row.classList.add('thumbnails-row');

    const filtered = genres.filter(g => g.catagory === catagory);

    filtered.forEach(video => {
        const card = document.createElement('div');
        card.classList.add('thumbnail-card');

        const img = document.createElement('img');
        img.dataset.src = video.imageurl;
        img.src = "";
        img.loading = "lazy";
        lazyObserver.observe(img);

        card.appendChild(img);
        row.appendChild(card);
    });

    section.appendChild(row);
    main.appendChild(section);
};
const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

loadGenres();
