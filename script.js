const jsonplaceholder_url = "https://jsonplaceholder.typicode.com/todos/1";
 
const users_wrapper = document.getElementById("users-wrapper");
 
async function getUsers() {
    const row_element = document.createElement("div");
    row_element.classList.add("row");
const res = await fetch(jsonplaceholder_url + "/users");
const data = await res.json();
for (user of data) {
users_wrapper.innerHTML += `
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
<div class="card mb-5">
<div class="card-body">
<h5 class="card-title">${user.name}</h5>
<p class="card-text">${user.company.name}</p>
</div>
</div>
</div>
`;
}
}
 
getUsers();