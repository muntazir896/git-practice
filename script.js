const userList=document.querySelector("#userList");

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        userList.innerHTML="";
        users.forEach(function(user){
            const li=document.createElement("li");
            li.textContent=`${user.name}-${user.email}`;
            userList.appendChild(li);
        });

    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

getUsers();