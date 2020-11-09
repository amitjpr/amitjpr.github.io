const toggle = document.getElementById('toggle');
toggle.addEventListener('change', (e)=> {
    document.body.classList.toggle("dark",e.target.checked);
})

"use strict";
const repos = document.getElementById('repos');
fetch("./repo.json").then(function (resp) {
    return resp.json();
}).then(function (data) {
    data.data.forEach((repo) => {
        const repoEl = document.createElement('repo');
        repoEl.innerHTML = `<h2>${repo.name}</h2>
        <p>${repo.lang}</p>
        
        <div class = "link">
        <a href = "${repo.url}" target = "_blank"><i class="fas fa-link"></i>View On Github</a>
        </div>`;
        repos.appendChild(repoEl)
    })
});

 burger = document.querySelector('.burger')
 navbar = document.querySelector('.navbar')
 right = document.querySelector('.right')
 left = document.querySelector('.left')
 
 burger.addEventListener('click',()=>{
    right.classList.toggle('v-class');
    left.classList.toggle('v-class');
    navbar.classList.toggle('hnav');
 })

 
 const button = document.getElementById("button");
const email = document.getElementById("email");
const nam = document.getElementById("name");
const ph = document.getElementById("phone");
const form = document.getElementById("form");
button.addEventListener('click', function () {

    if(email.value==""||ph.value==""||nam.value==""){
        window.alert("One or more fields are empty");
    }
    else{
        const mail = email.value;
        const name = nam.value;
        const phone = ph.value;
       
        var data = {
            name: name,
            email: mail,
            phone: phone,
        }
        var database = firebase.database();
        var ref = database.ref("Records");
    
        ref.push(data);
    
        form.reset();

        window.alert("Thank you for contacting us. We will reach you shortly.");
    }
})