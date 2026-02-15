// =================== Button works ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const genres = [{
    title: "YouTube",
    genre: "Heros-villans",
    imageurl: "https://www.youtube.com"
},
{
    title: "YouTube",
    genre: "animated",
    imageurl: "https://www.youtube.com"
},
{
    title: "YouTube",
    genre: "adventure",
    imageurl: "https://www.youtube.com"
}
];


const loadVideos = (genres) => {
    const main = document.querySelector('main');
    main.innerHTML = "";

    genres.foreach(genre => {
        // creating section tag
        const section = document.createElement('section'); // section tag is built
        section.classList.add('genre-row');
        // creating h2
        const h2 = document.createElement('h2');    // h2 tag is built for section
        h2.textContent = genre.name; //name will need to be change to what genre is labaled as in the object
        section.appendChild('h2');
        // creating a class to to put videos in a row
        const row = document.createElement('div');
        row.classList.add('video-row');

        // Filtering Videso by genre
        const filtered = genre.videos.filter(video => video.genre === genre.name);

        // sort alphebetically
        const sorted = filtered.sort((a, b) => {
            a.title.localeCompare(b.title)
        });

        // building cards
        sorted.forEach(video => {
            const card = document.createElement('div');
            card.classList.add('video-card');
            card.addEventListener('click', () => {
                console.log('Clicked', video.title);
            });
            // handles displaying images from imageurls
            const img = document.creatElement('img');
            img.src = imageurl;

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