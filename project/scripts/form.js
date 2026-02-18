
// =================== Button works ==================//
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', function () {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const categories = [
  { id: "movies-add", name: "Movies to Add" },
  { id: "movies-remove", name: "Movies to Remove" },
  { id: "features-add", name: "Features to Add" },
  { id: "features-remove", name: "Features to Remove" },
  { id: "general-feedback", name: "General Feedback" }
];

const select = document.querySelector('#category');

categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat.id;
    option.textContent = cat.name;
    select.appendChild(option);
});
