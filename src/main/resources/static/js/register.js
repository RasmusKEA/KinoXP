const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const password = document.querySelector('#password');



function createUser() {
    const passwordRepeated = document.querySelector('#rpassword');

    if(password.value === passwordRepeated.value){
        let newUser = {
            "firstname" : `${firstname.value}`,
            "lastname" : `${lastname.value}`,
            "username" : `${username.value}`,
            "password" : `${password.value}`
        };

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
        window.alert("Passwords do not match");
        location.reload();
    }
}

