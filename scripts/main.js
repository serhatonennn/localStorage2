// let users;
// localStorage.setItem("note", JSON.stringify(
//     users = [{
//             name: "John Doe",
//             city: "New York",
//             email: "john.doe@example.com"
//         },
//         {
//             name: "Jane Doe",
//             city: "Los Angeles",
//             email: "jane.doe@example.com"
//         },
//         {
//             name: "Jim Beam",
//             city: "Chicago",
//             email: "jim.beam@example.com"
//         },
//         {
//             name: "Jim Beam",
//             city: "Chicago",
//             email: "jim.beam@example.com"
//         },
//         {
//             name: "Hasan Serhat Önen",
//             city: "Sivas",
//             email: "serhat.hsn@example.com"
//         }
//     ]


// ));

let usersArray = JSON.parse(localStorage.getItem("note")); //!int e çevirdik tek tek
let html = "";

function renderUsers() {
    html = "";
    for (let i = 0; i < usersArray.length; i++) {
        html += `<tr>
        <td>${usersArray[i].name}</td>
        <td>${usersArray[i].city}</td>
        <td>${usersArray[i].email}</td>
        </tr>`;
    };
    document.getElementById("users").innerHTML = html;
}
renderUsers();

function addUser() {
    const name = document.getElementById("name");
    const city = document.getElementById("city");
    const email = document.getElementById("email");
    usersArray.push({ name: name.value, city: city.value, email: email.value });
    localStorage.setItem("note", JSON.stringify(usersArray));

    name.value = "";
    city.value = "";
    email.value = "";
    renderUsers();

}
document.getElementById("addUser").addEventListener("click", addUser);

function deleteUser() {



}