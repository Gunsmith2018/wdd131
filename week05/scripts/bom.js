
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // THis will link to an HTML tag



button.addEventListener('click', () => {
    if (input.value != '') {// make sure the input is not empty

        displayList(input.value);// call the function that outputs the submitted chapter

        chaptersArray.push(input.value);// add the chapter to the array

        setChapterList(); // update the localStorage with the new array

        input.value = '';// clear the input

        input.focus();// set the focus back to the input

    }
})

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myFavBOMList')); // calls/ retreves the saved bom list
}
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});
const displayList = (item) => {
    let li = document.createElement('li'); // Creates a single line list that isn't deployed to html yet.
    let deletebutton = document.createElement('button'); // creates a variable deletebutton called button
    li.textContent = item; // Depending on what item is, the result could be similar to <li>Genesis</li>
    deletebutton.textContent = '❌'; // Sets the deletebutton to an X 
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton); // Taking the delete button and putting it inside of <li> 
    list.append(li); // Connects <li> to the id 'list'
    deletebutton.addEventListener('click', () => {
        list.removeChild(li); // should remove <li> when clicked
        deleteChapter(li.textContent); // removes The chapter from the array and LocalStorage
        input.focus(); // set the focus back to the input.
    });

}
const setChapterList = () => {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); // Setting to local storage 
}

deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1); // cuts off the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter); // removes a certain chapter
    setChapterList(); // saves/ updates the string
}