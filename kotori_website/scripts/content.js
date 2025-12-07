// Java Script for Content

const streamLinks = [
    {
    website: "Twitch",
    imageUrl:"https://cdn.discordapp.com/attachments/1445983484043853825/1445983636334837791/kotori_b-day_w.png?ex=6935a073&is=69344ef3&hm=733b447f90cbcc320de6667b8d4375628d5282507f2a8339271b0a07e7755e92"
    }
]

const main = document.querySelector("main");

streamLinks.forEach(link =>{
  const card = document.createElement("section")
  card.classList.add("link-card");

  card.innerHTML = `
    <h2>${link.website}</h2>
  `;
    // Image
  const img = document.createElement("img");
  img.setAttribute("data-src", link.imageUrl); // real image stored here
  img.setAttribute("alt", link.website);
    // Assemble
  card.appendChild(img);
  main.appendChild(card);
});

//This gets the observer running
const lazyLink = document.querySelectorAll("img[data-src]"); // lazy loading

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
const displayToHTML = lazLink.forEach(img=>{
    observer.observe(img);
    return img;
})