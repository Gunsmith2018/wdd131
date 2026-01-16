
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // THis will link to an HTML tag

        
button.addEventListener('click', function () {
    if (input.value.trim !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = inputvalue;

        deleteButton.textcontent = '❌';

        li.append(deleteButton);
        list.append(li);
    }
})