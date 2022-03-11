/*
fetch('https://sofin.wp-admin.it/public/api/v1/user',
     {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marco",
            lastname: "Rossi",
            email: "tesdDSDSDSDssddst.shaylee@example.org",
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            role_id: 4
        }),
    })

    .then(response => response.json())
    .then(data => {
        console.log("Success:", data)
    })
*/

fetch("https://sofin.wp-admin.it/public/api/v1/user") //fai una chiamata a questo indirizzo
  //then= "quando hai finito"

  .then((response) => response.json()) //trasforma la risposta alla chiamata in un JSON
  .then((data) => {
    //quando hai finito di trasfrmare la risposta in JSON
    console.log("Success:", data); //in JSON fai le seguenti cose

    data.forEach((element) => {
      let tBody = document.querySelector("tbody");

      let tr = document.createElement("tr");

      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let pulsante = document.createElement("button");
      let td6 = document.createElement("td");
      let pulsante1 = document.createElement("button");

      td.innerText = element.name;
      td1.innerText = element.lastname;
      td2.innerText = element.email;
      td3.innerText = element.password;
      td4.innerText = element.role.nicename;
      pulsante.innerText = "Remove";
      pulsante1.innerText = "Modify";

      pulsante.classList.add(
        "btn",
        "btn-warning",
        "btn-sm",
        "background-color"
      );
      pulsante1.classList.add(
        "btn",
        "btn-warning",
        "btn-sm",
        "background-color"
      );

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5).append(pulsante);
      tr.appendChild(td6).append(pulsante1);

      tBody.appendChild(tr);
    });
 
  });

  
//PULSANTE PER AGGIUMGERE USER
let bottone = document.querySelector("button");

bottone.addEventListener("click", () => {
  history.pushState({}, "", "addUserForm.html");
  location.href = "addUserForm.html";
});

//PULSASNTE PER MODIFICARE USER
pulsante.addEventListener("click", function(){
  fetch("https://sofin.wp-admin.it/public/api/v1/user/" + element.id,{
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then(()=>{
    tr.remove()
  })
})