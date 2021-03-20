// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let innerLogin = document.getElementById("innerLogin");
let outerLogin = document.getElementById("loginBtn");
let profileBtn = document.getElementById("profileBtn");



innerLogin.onclick = function (){

        let username = document.getElementById("loginUsername");
        let password = document.getElementById("loginPassword");

        const requestObject = {
            method : "GET",
            "content-type" : "application/json",
            redirect : "follow"
        }

        let unameUrl = `http://localhost:8080/getUsername/${username.value}`

        fetch(unameUrl, requestObject)
            .then(response => response.json())
            .then(data => verifyUser(data, username, password));


    //fetch en user baseret på brugernavn
    //if user.username og user.password mathcer loginPassword og loginUsername
    //document.getElementByID("loginPassword") og det samme for brugernavn
    //matcher de, så sættes localstorage til user.id som nedenfor
    //localStorage.setItem("userid", `${user.id}`);

}

function verifyUser(user, username, password){
    console.log(user, username.value, password.value);
    user.forEach(
        user => {
            if (username.value.trim() === user.username.trim() && password.value.trim() === user.password.trim()){
                localStorage.setItem("userid", `${user.id}`);
                location.reload();
            }
        }
    )
}


let prfBtn = document.createElement("BUTTON");

window.onload = function (){
    if(localStorage.getItem("userid") == null){
        outerLogin.value = "Login";
        outerLogin.innerHTML = "Login";
    }else{

        outerLogin.hidden = true;
        const nav = document.getElementById("test");
        prfBtn.setAttribute("id", "profileBtn");
        prfBtn.className = "btn btn-outline-success my-2 my-sm-0 loginBtn";
        prfBtn.innerHTML = "Profile";
        nav.append(prfBtn);
    }
}

prfBtn.onclick = function (){
    location.href = '/profile';
}