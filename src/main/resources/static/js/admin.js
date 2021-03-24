const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function (){
    modal.style.display = "block";
}

span.onclick = function (){
    modal.style.display = "none";
}

window.onclick = function (event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
function createMovie() {


    const movietitle = document.querySelector('#movietitle');
    const genre = document.querySelector('#genre');
    const releaseyear = document.querySelector('#releaseyear');
    const image = document.querySelector('#image');

    let newMovie = {
        "movieTitle": `${movietitle.value}`,
        "releaseYear": `${releaseyear.value}`,
        "genre": `${genre.value}`,
        "image": `${image.value}`
    };

    const minurl = "http://localhost:8080/deleteMovie"

    let body = JSON.stringify(newMovie);

    const requestOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body: body
    };


    fetch(minurl, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("success", data)
        })
        .catch((error) => {
            console.log("Error:", error)
        });

    location.reload();
}
