
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterButton');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
            if (input.value.trim() !== '') {
                const li = document.createElement('li');
                const deleteButton = document.createElement('button');

                li.textContent = input.value.trim();
                deleteButton.textContent = '❌';
                li.appendChild(deleteButton);
                list.appendChild(li);

                deleteButton.addEventListener('click', function () {
                    list.removeChild(li);
                    input.focus();
                });

                input.value = '';
            } else {
                // Provide a message or at least do nothing and return focus to the input field
                input.focus();
            }
        });
     
