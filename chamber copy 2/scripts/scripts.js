document.addEventListener("DOMContentLoaded", function() {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const membersContainer = document.getElementById("members-container");

    // Event listener for grid view button
    gridViewButton.addEventListener("click", function() {
        membersContainer.classList.remove("list");
        membersContainer.classList.add("grid");
    });

    // Event listener for list view button
    listViewButton.addEventListener("click", function() {
        membersContainer.classList.remove("grid");
        membersContainer.classList.add("list");
    });

    // Function to fetch and display members
    function fetchAndDisplayMembers() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => {
                membersContainer.innerHTML = ""; // Clear existing member elements

                data.forEach(member => {
                    const memberElement = document.createElement("div");
                    memberElement.classList.add("member");

                    // Construct member information
                    const memberHTML = `
                        <img src="images/${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p><strong>Address:</strong> ${member.address}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                        <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                        <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                        <p><strong>Other Information:</strong> ${member.other_information}</p>
                    `;

                    // Append member HTML to container
                    memberElement.innerHTML = memberHTML;
                    membersContainer.appendChild(memberElement);
                });
            })
            .catch(error => console.error("Error fetching members:", error));
    }

    // Initial fetch and display of members
    fetchAndDisplayMembers();
});
