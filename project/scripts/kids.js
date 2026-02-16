// =================== Button works ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const genres = [
    {title: "proto-video", catagory: "heros-villans", imageurl: "images/proto.jpg", videourl: "videos/proto.mp4"},

];
const categories = [
    "heros-villans",
    "animated",
    "adventure",
    "family",
    "fantasy",
    "musical"
]


const loadVideos = (videos) => {
    const main = document.querySelector('main');
    main.innerHTML = "";

    categories.forEach(catagory => {
        // creating section tag
        const section = document.createElement('section'); // section tag is built
        section.classList.add('genre-row');
        
        // creating h2
        const h2 = document.createElement('h2');    // h2 tag is built for section
        h2.textContent = catagory; 
        section.appendChild(h2);
        // creating a class to to put videos in a row
        const row = document.createElement('div');
        row.classList.add('video-row');

        // Filtering Videso by genre
        const filtered = videos.filter(video => video.catagory === catagory);

        // sort alphebetically
        const sorted = filtered.sort((a, b) => {
         return   a.title.localeCompare(b.title)
        });

        // building cards
        sorted.forEach(video => {
            const card = document.createElement('div');
            card.classList.add('video-card');
        // enables clicking on a video
card.addEventListener('click', () => {
    const main = document.querySelector('main');

    main.innerHTML = `
        <video controls autoplay style="width:100%; max-width:900px;">
            <source src="${video.videourl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
});



            // handles displaying images from imageurls
            const img = document.createElement('img');
            img.dataset.src = video.imageurl;   // store real URL
            img.src = "";                       // blank or placeholder
            img.loading = "lazy";               // optional, helps browsers
            lazyObserver.observe(img);          // attach observer


            const title = document.createElement('p');
            title.textContent = video.title;

            card.appendChild(img);
            card.appendChild(title);
            row.appendChild(card);

        });

        section.appendChild(row);
        main.appendChild(section);

    });

}

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
loadVideos(genres);