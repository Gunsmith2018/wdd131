//---Hamburger menu-------------------------------//
  const hamButton = document.querySelector("#menu");
  const navLinks = document.querySelector(".navbar ul");

  hamButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
// -------------------------------------//
});
// Fan Arts Array
const fanArts = [
    {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl: "https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl: "https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
        {
    creator: "Valatrice",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"

    },
    
]


const main = document.querySelector("main");

fanArts.forEach(art =>{
  const card = document.createElement("section")
  card.classList.add("art-card");

  // Title
  const title = document.createElement("h2");
  title.textContent = art.creator;
    // Image
  const img = document.createElement("img");
  img.setAttribute("data-src", art.imageUrl); // real image stored here
  img.setAttribute("alt", art.creator);
    // Assemble
  card.append(title, img);
  main.appendChild(card);
});

//This gets the observer running
const lazyArt = document.querySelectorAll("img[data-src]"); // lazy loading

const observer = new IntersectionObserver(entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    })
})
lazyArt.forEach(img => observer.observe(img));


