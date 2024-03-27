
async function fetchAndDisplayMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        const memberDataContainer = document.getElementById('memberData');

        data.companies.forEach(member => {
            const row = document.createElement('tr');
            row.innerHTML = `
        <td>${member.name}</td>
        <td>${member.phone}</td>
        <td>${member.address}</td>
        <td>${member.membership_level}</td>
        <td><a href="${member.website}" target="_blank">Details</a></td>
    `;
            memberDataContainer.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

fetchAndDisplayMembers();

function toggleVisibility(section) {
    var gridSection = document.querySelector('.grid');
    var listSection = document.querySelector('#memberTable');

    if (section === 'list') {
        listSection.style.display = 'block';
        gridSection.style.display = 'none';
    } else if (section === 'grid') {
        listSection.style.display = 'none';
        gridSection.style.display = 'grid';
    }
}