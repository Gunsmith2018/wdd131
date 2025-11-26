const streamerPhotos = document.querySelectorAll('img.lazy'); // streamerPhoto will be renamed to streamerPhotos (s) was added

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

streamerPhotos.forEach(img=>{
    observer.observe(img);
})

// above is the function for lazy loading