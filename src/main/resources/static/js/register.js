const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');


function fetchUsername(){
    const requestObject = {
        method : "GET",
        "content-type" : "application/json",
        redirect : "follow"
    }

    let unameUrl = `http://localhost:8080/getUsername/${username.value}`

    fetch(unameUrl, requestObject)
        .then(response => response.json())
        .then(data => checkUsername(data));

}

function checkUsername(data) {
    let usernameChecked = false;
    data.forEach(data => {
        console.log("checked username data: " + data.username.trim());
        console.log("checked username: " + username.value.trim());
        if (data.username.trim() !== username.value.trim()) {
            usernameChecked = false;
        } else {
            usernameChecked = true;
        }
    })
    createUser(usernameChecked)
}

function createUser(usernameChecked) {
    const passwordRepeated = document.querySelector('#rpassword');
    let newUser = {
        "firstname" : `${firstname.value}`,
        "lastname" : `${lastname.value}`,
        "username" : `${username.value}`,
        "password" : `${password.value}`
    };

    if(password.value === passwordRepeated.value){
        if(usernameChecked === false){
            let body = JSON.stringify(newUser);
            const URL = "http://localhost:8080/createUser";

            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: body
            };

            fetch(URL, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("success", data)
                })
                .catch((error) => {
                    console.log("Error:", error)
                });
            location.reload();
        }else{
            window.alert("Username already in use");
            location.reload();
        }

    }else{
        window.alert("Passwords do not match");
        location.reload();
    }
}

