const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');// I will need to fill this in to reference the html element

button.addEventListener('click', function() {
    if (input.value.trim() !== '') { // this line is checking if the userinput is stritchtly not equal to an empty string
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });
        
        input.value = '';
        input.focus();
    }
});


const chaptersArray = [""];

function getChapterList() {
    return [];
}