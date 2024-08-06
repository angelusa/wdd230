
document.addEventListener('DOMContentLoaded', function() {
    const directory = document.getElementById('directory');
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const listContainer = document.getElementById('list-container');
    const membersList = document.getElementById('members-list');
    // Fetch the JSON data
    fetch('data/members.json')  // Ensure this path is correct relative to your HTML file
        .then(response => response.json())
        .then(data => {
            displayMembersInGrid(data.companies);
            displayMembersInList(data.companies);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));
    
    // Function to display members in grid view
    function displayMembersInGrid(members) {
        directory.innerHTML = '';
        members.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');
            memberDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <div class="info">
                    <h2>${member.name}</h2>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">${member.website}</a>
                    <p>Membership Level: ${member.membership_level}</p>
                </div>
            `;
            directory.appendChild(memberDiv);
        });
    }
    
    // Function to display members in list view
    function displayMembersInList(members) {
        membersList.innerHTML = '';
        members.forEach(member => {
            const memberRow = document.createElement('tr');
            memberRow.innerHTML = `
                <td>${member.name}</td>
                <td>${member.phone}</td>
                <td>${member.address}</td>
                <td>${member.membership_level}</td>
                <td><a href="${member.website}" target="_blank">Details</a></td>
            `;
            membersList.appendChild(memberRow);
        });
    }
    
    // Event listeners for view toggle
    gridViewButton.addEventListener('click', () => {
        directory.classList.remove('hidden');
        listContainer.classList.add('hidden');
        directory.classList.add('grid-view');
    });
    
    listViewButton.addEventListener('click', () => {
        directory.classList.add('hidden');
        listContainer.classList.remove('hidden');
    });
    });