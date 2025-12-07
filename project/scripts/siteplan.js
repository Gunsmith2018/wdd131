const plans = [

    {
        page: "home",
        imageUrl:"https://cdn.discordapp.com/attachments/1303855607752953938/1445945268733345842/20251203_191003.jpg?ex=6936ce38&is=69357cb8&hm=6d4daf6d8b3bc2f070c89017bee15ef4c36380c00363cfd683b5bcb5af9fa5f5"
    },

    {
        page: "content",
        imageUrl:"https://cdn.discordapp.com/attachments/1303855607752953938/1446220139174297751/20251203_203843.jpg?ex=69367cb6&is=69352b36&hm=b693d1d2b0abdf3991e30937684f89f8e214263d9096b26994d2717237fa3b6d&"
    },

    {
        page: "fan-arts",
        imageUrl:"https://cdn.discordapp.com/attachments/1303855607752953938/1446220138373185597/20251203_214428.jpg?ex=69367cb6&is=69352b36&hm=d848cb67be1820ff4cacc8a3e0e84f770f0c8c643b5b7e00046d16eb10b43606&"
    }, 

    {
        page: "social",
        imageUrl:"https://cdn.discordapp.com/attachments/1303855607752953938/1447265741689589923/20251207_103701.jpg?ex=6936fec1&is=6935ad41&hm=d1077a2bc47a7aa6092c6d0768afa4be03e82650cbf655ea95e075d04d4420d4"
    }, 
    
]

const main = document.querySelector("main");

plans.forEach(plan =>{
  const card = document.createElement("section")
  card.classList.add("plan-card");

  card.innerHTML = `
    <h2>${plan.page}</h2>
  `;
    // Image
  const img = document.createElement("img");
  img.setAttribute("data-src", plan.imageUrl); // real image stored here
  img.setAttribute("alt", plan.page);
    // Assemble
  card.appendChild(img);
  main.appendChild(card);
});

//This gets the observer running
const lazyPlan = document.querySelectorAll("img[data-src]"); // lazy loading

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
const displayToHTML = lazyPlan.forEach(img=>{
    observer.observe(img);
    return img;
})