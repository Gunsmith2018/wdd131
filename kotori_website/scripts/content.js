// Java Script for Content

const streamLinks = [
    {
    website: "Twitch",
    imageUrl: "data:image/png;base64,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",
    url: "https://www.twitch.tv/kotoriwisp",
  },

      {
    website: "YouTube",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnjBLHm51aGNdwJ8xwf9JK9TREy_3pDhD19eUtsiGp9mz692G0mXxHzc&s",
    url: "https://www.youtube.com/@kotoriwisp",
    },
]

const main = document.querySelector("main");

streamLinks.forEach(link =>{
  const card = document.createElement("section")
  card.classList.add("link-card");

  card.innerHTML = `
    <h2>${link.website}</h2>

  `;
  //anchor tag
  const anchor = document.createElement("a");
  anchor.href = link.url;
  anchor.target = "_blank";

    // Image
  const img = document.createElement("img");
  img.setAttribute("data-src", link.imageUrl); // real image stored here
  img.setAttribute("alt", link.website);

  // Assemble
  anchor.appendChild(img);
  card.appendChild(anchor);
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
const displayToHTML = lazyLink.forEach(img=>{
    observer.observe(img);
    return img;
})