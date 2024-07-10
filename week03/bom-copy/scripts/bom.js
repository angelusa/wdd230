const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to get the chapter list from localStorage
function getChapterList() {
    try {
        return JSON.parse(localStorage.getItem('chapters')) || [];
    } catch (e) {
        console.error('Error accessing localStorage', e);
        return [];
    }
}

// Function to update the localStorage with the chaptersArray
function setChapterList() {
    try {
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
    } catch (e) {
        console.error('Error updating localStorage', e);
    }
}

// Function to display a chapter in the list
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // Adding a class for styling purposes
    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item); // Call the function to remove the chapter from the array and localStorage
        input.focus(); // Set the focus back to the input
    });
}

// Function to remove a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Call the setChapterList function to update the localStorage item
    setChapterList();
}

// Declare an array named chaptersArray and assign it to the results of getChapterList function
let chaptersArray = getChapterList();

// Display existing chapters on page load
chaptersArray.forEach(displayList);

// Button click event listener
button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});
